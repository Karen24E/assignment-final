class CommunityPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
<style>

* {
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

/* MAIN BOARD */
.board {
  width: 1120px;
  margin: 33px;
  margin-bottom: 254px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

/* FIRST HEADER */
.first-header {
  height: 97px;
  width: 1118px;
  background: #F9FAFB;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.heading {
  width: 1070px;
  display: flex;
  align-items: center;
}

.icon {
  height: 40px;
  width: 40px;
  border-radius: 8px;
  background: #4F39F6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.icon img {
  height: 20px;
  width: 20px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: rgb(30, 41, 59);
}

.subtitle {
  font-size: 14px;
  color: oklch(0.551 0.027 264.364);
}

/* SECOND CONTAINER */
.second-container {
  width: 1118px;
  padding-top: 1px;
}

/* NEW POST BOX */
.new-post {
  height: 144px;
  margin: 25px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.2);
}

.alpha-text {
  margin: 16px;
  width: 1036px;
}

.input-row {
  display: flex;
  align-items: center;
}

.alphabet {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #2B7FFF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
}

textarea {
  width: 984px;
  height: 38px;
  padding: 12px 14px;
  border-radius: 8px;
  background: white;
  border: none;
  resize: none;
  outline: none;
}

textarea:focus {
  border: 2px solid #3b82f6;
  box-shadow: 0 0 0 4px rgba(59,130,246,0.25);
}

/* POST BUTTON */
.poster {
  margin-top: 12px;
  width: 984px;
  display: flex;
  justify-content: flex-end;
}

.post-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  border: none;
  background: #9FC1FC;
  opacity: 0.4;
  cursor: not-allowed;
}

.post-btn.active {
  background: #2B7FFF;
  opacity: 1;
  cursor: pointer;
}

.post-btn img {
  height: 16px;
  width: 16px;
}

/* EMPTY STATE */
.no-post {
  width: 1068px;
  height: 140px;
  margin: 25px;
  border-radius: 8px;
  border: 1px dashed rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comment img {
  width: 48px;
  height: 48px;
}

.comment p {
  font-size: 16px;
  color: oklch(0.551 0.027 264.364);
}

/* POSTS LIST */
.posts {
  width: 1068px;
  margin: 0 25px 25px 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post-card {
  background: white;
  padding: 12px 16px;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 6px;
  color: oklch(0.551 0.027 264.364);
}

.post-author {
  font-weight: 600;
}

.post-body {
  font-size: 14px;
  color: rgb(30, 41, 59);
}

</style>

<div class="board">
  <div class="first-header">
    <div class="heading">
      <div class="icon">
        <img src="/assets/images/community-2.svg">
      </div>
      <div class="text-container">
        <div class="title">Community Board</div>
        <div class="subtitle">Collaborate with your team</div>
      </div>
    </div>
  </div>

  <div class="second-container">
    <div class="new-post">
      <div class="alpha-text">
        <div class="input-row">
          <div class="alphabet">O</div>
          <textarea id="input" placeholder="Share an update, ask for help, or celebrate a win..."></textarea>
        </div>
        <div class="poster">
          <button id="postBtn" class="post-btn" disabled>
            <img src="/assets/images/message-1.svg">
            Post
          </button>
        </div>
      </div>
    </div>

    <div class="no-post" id="noPostBox">
      <div class="comment">
        <img src="/assets/images/comment.svg">
        <p>No posts yet. Be the first to share something!</p>
      </div>
    </div>

    <div class="posts" id="postsList"></div>
  </div>
</div>
`;

    // ------- DOM ELEMENTS -------
    const textarea = this.shadowRoot.querySelector("#input");
    const postBtn = this.shadowRoot.querySelector("#postBtn");
    const postsList = this.shadowRoot.querySelector("#postsList");
    const noPostBox = this.shadowRoot.querySelector("#noPostBox");

    // ------- STORAGE -------
    function savePosts() {
      localStorage.setItem("communityPosts", JSON.stringify(posts));
    }

    function loadPosts() {
      return JSON.parse(localStorage.getItem("communityPosts")) || [];
    }

    // ------- RENDER -------
    function renderPosts(posts) {
      postsList.innerHTML = "";

      if (posts.length === 0) {
        noPostBox.style.display = "flex";
        return;
      }

      noPostBox.style.display = "none";

      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "post-card";

        card.innerHTML = `
          <div class="post-header">
            <span class="post-author">${post.author}</span>
            <span class="post-time">${post.time}</span>
          </div>
          <div class="post-body">${post.text}</div>
        `;

        postsList.appendChild(card);
      });
    }

    let posts = loadPosts();
    renderPosts(posts);

    // ------- ENABLE BUTTON -------
    textarea.addEventListener("input", () => {
      const hasText = textarea.value.trim().length > 0;

      postBtn.disabled = !hasText;
      postBtn.classList.toggle("active", hasText);
    });

    // ------- ADD POST -------
    postBtn.addEventListener("click", () => {
      const text = textarea.value.trim();
      if (!text) return;

      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newPost = {
        text,
        author: "You",
        time: timeString,
      };

      posts.unshift(newPost);
      savePosts();
      renderPosts(posts);

      textarea.value = "";
      postBtn.disabled = true;
      postBtn.classList.remove("active");
    });
  }
}

customElements.define("community-page", CommunityPage);
