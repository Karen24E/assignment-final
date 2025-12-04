class SideMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* LEFT SIDEBAR BOX */
        .left-container {
          width: 255px;
          height: 100vh;              
          background-color: #F9FAFB ;
          border-right: 0.1px solid grey;    
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .task {
          display: flex;
          align-items: center;
          height: 64px;
          width: 255px;
        }

        .img-1 {
          display: flex;
          background-color: #4544F7;
          height: 40px;
          width: 40px;
          border-radius: 8px;
          
          justify-content: center;
          align-items: center;
          margin: 16px 12px 16px 16px;
        }

        h2 {
          font-size: 16px;
          width: 90px;
          margin-right: auto;
        }

        /* our "less than" button */
        .img-2 {
          width: 12px;
          height: 12px;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;
          cursor: pointer;
          border-radius: 6px;
        }

        .img-2:hover {
          background-color: #70CDE2;
        }

        hr {
          opacity: 0.2;
          margin: 0;
        }

        .user {
          display: flex;
          height: 40px;
          margin: 16px 15px 17px 15px;
        }

        .name {
          background-color: #4544F7;
          border-radius: 100px;
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        .alphabet {
          font-size: 18px;
          font-weight: 600;
          color: white;
        }

        .user-info {
          margin-left: 12px;
        }

        .user-name {
          font-size: 14px;
          font-weight: 550;
        }

        .user-email {
          font-size: 12px;
        }

        .menu-section {
          flex: 1;
          width: 255px;
          display: flex;
        }

        .menu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .menu-section li {
          height: 36px;
          width: 223px;
          margin: 4px 16px 0 16px;
          display: flex;
          align-items: center;
          border-radius: 6px;
        }

        .icon {
          padding: 12px;
        }

        .dash {
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4F39F5;
        }

        .logout {
          width: 255px;
          height: 69px;
        }

        .logs {
          display: flex;
          height: 36px;
          width: 223px;
          align-items: center;
          margin: 16px;
          background-color: transparent;
          border-radius: 6px;
          cursor: pointer;
        }

        .log {
          font-size: 14px;
          color: #E7000B;
          font-weight: 500;
          margin-left: 8px;
        }

        .logs:hover {
          background-color: #FEF2F3;
        }
        
        
          .class-1 {
            height: 36px;
            width: 223px;
            margin: 4px 16px;
            display: flex;
            align-items: center;
            border-radius: 6px;
            background: #ECF2FF; 
            transition: background 0.2s, color 0.2s;
          }

          .class-1 p {
            color: #5944F5
            font-size: 14px;
            font-weight: 500;
            margin-left: 8px;
          }

          .class-1:hover {
            background: #5944F5;
            opacity: 0.1;
          }

          .class-1:hover p {
            color: white; 
          }

            /* ACTIVE SELECTED STATE */
            .active {
              background: #ECF2FF !important;
            }

            .active p {
              color: #5944F5 !important;
}

              /* NORMAL HOVER (when item is NOT active) */
              .menu-item:not(.active):hover {
                background: #EDF2FF;
              }

              .menu-item:not(.active):hover p {
                color: #4F39F5;
}

        /* ============================
           COLLAPSE STYLES
        ============================ */
       

      </style>

      <div class="left-container">

        <!-- TOP TITLE BLOCK -->
        <div class="task">
          <div class="img-1">
            <img src="../assets/images/checkbox.svg" alt="checkbox">
          </div>
          <h2>TaskMaster</h2>

          <!-- collapse button -->
          <div class="img-2" id="collapse-btn">
            <img src="../assets/images/less than-1.svg" alt="collapse">
          </div>
        </div>

        <hr>

        <!-- USER -->
        <div class="user">
          <div class="name">
            <span class="alphabet">O</span>
          </div>

          <div class="user-info">
            <div class="user-name">Olorioluwa</div>
            <div class="user-email">Karenekeji@outlook.com</div>
          </div>
        </div>

        <hr>

        <!-- MENU -->
        <div class="menu-section">
          <ul>
            <li class="class-1">
              <span class="icon"><img src="../assets/images/dashboard-1.svg" alt="dashboard"></span>
              <p class="dash">Dashboard</p>
            </li>

            <li class="class-2">
              <span class="icon"><img src="../assets/images/checkbox-4.svg" alt="checkbox"></span>
              <p class="task-1">Tasks</p>
            </li>

            <li class="class-3">
              <span class="icon"><img src="../assets/images/community-1.svg" alt="community-icon"></span>
              <p class="community">Community</p>
            </li>

            <li class="class-4">
              <span class="icon"><img src="../assets/images/dollar-3.svg" alt="dollar-sign"></span>
              <p class="expense">Expenses</p>
            </li>

            <li class="class-5">
              <span class="icon"><img src="../assets/images/note-2.svg" alt="notes-icon"></span>
              <p class="notes">Notes</p>
            </li>

            <li class="class-6">
              <span class="icon"><img src="../assets/images/settings.svg" alt="settings"></span>
              <p class="settings">Settings</p>
            </li>
          </ul>
        </div>

        <hr>

        <!-- LOGOUT -->
        <div class="logout">
          <div class="logs">
            <div class="sign"><img src="../assets/images/logout-1.svg" alt="logout"></div>
            <div class="log">Logout</div>
          </div>
        </div>

      </div>
    `;

    // collapse
    const sidebar = this.shadowRoot.querySelector(".left-container");
    this.shadowRoot
      .querySelector("#collapse-btn")
      .addEventListener("click", () => sidebar.classList.toggle("collapsed"));

    // Navigation
    this.shadowRoot
      .querySelector(".class-1")
      .addEventListener("click", () => showPage("dashboard-page"));

    this.shadowRoot
      .querySelector(".class-2")
      .addEventListener("click", () => showPage("task-page"));

    this.shadowRoot
      .querySelector(".class-3")
      .addEventListener("click", () => showPage("community-page"));

    // Make the clicked menu item active
    const items = this.shadowRoot.querySelectorAll(".menu-section li");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("active")); // remove old active
        item.classList.add("active"); // set new active
      });
    });
  }
}

customElements.define("side-menu", SideMenu);
