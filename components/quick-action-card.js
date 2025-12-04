class QuickActionCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "";
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const bg = this.getAttribute("bg") || "#F0F0F0";

    this.shadowRoot.innerHTML = `
      <style>
         .card {
            background: #F8F9A;
            border:0.1px solid grey;
            border-radius: 12px;
            padding: 16px;
            display: flex;
            gap: 12px;
            align-items: center;
            transition: background-color 0.1s;
            }

            .card:hover {
            background: #05B6D4;
            }

            .card:hover .title{
            color:white;
            }
        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: ${bg};
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;
        }

        .icon-box img {
          width: 20px;
          height: 20px;
        }

        .title {
          font-size: 14px;
          font-weight: 500;
        }

        .subtitle {
          font-size: 12px;
          opacity: 0.6;
        }
      </style>

      <div class="card">
        <div class="icon-box">
          <img src="${icon}">
        </div>

        <div class="text">
          <div class="title">${title}</div>
          <div class="subtitle">${subtitle}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("quick-action-card", QuickActionCard);
