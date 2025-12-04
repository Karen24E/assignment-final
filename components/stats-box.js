class StatsBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const number = this.getAttribute("number") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const icon = this.getAttribute("icon") || "";
    const color = this.getAttribute("color") || " #00000020 ";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .box {
          height: 176px;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          background: white;
          padding: 16px;
          box-sizing: border-box;
          transition: box-shadow 0.2s ease;
        }

        .box:hover {
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 74px;
        }

        .title {
          font-size: 14px;
          font-weight: 400;
          color: #1E293B;
          opacity: 0.9;
        }

        .icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background:${color};
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-box img {
          width: 20px;
          height: 20px;
        }

        .number {
          font-size: 24px;
          font-weight: 600;
          margin-top: 8px;
        }

        .subtitle {
          font-size: 14px;
          opacity: 0.7;
          margin-top: 2px;
        }
      </style>

      <div class="box">
        <div class="top">
          <div class="title">${title}</div>

          <div class="icon-box">
            <img src="${icon}" alt="${title}">
          </div>
        </div>

        <div class="number">${number}</div>
        <div class="subtitle">${subtitle}</div>
      </div>
    `;
  }
}

customElements.define("stats-box", StatsBox);
