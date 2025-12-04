class RecentTask extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Recent Task";
    const icon = this.getAttribute("icon") || "../assets/images/timer.svg";
    const emptyIcon =
      this.getAttribute("empty-icon") || "../assets/images/checkbox-2.svg";
    const emptyText = this.getAttribute("empty-text") || "No task yet";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .box {
          width: 548px;
          height: 346px;
          background: white;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          padding: 24px;
          box-sizing: border-box;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .header img {
          width: 20px;
          height: 20px;
        }

        .header span {
          font-size: 14px;
          font-weight: 500;
          color: #000;
        }

        .empty-state {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.6;
        }

        .empty-state img {
          width: 48px;
          height: 48px;
          margin-bottom: 12px;
        }

        .empty-state span {
          font-size: 14px;
          font-weight: 400;
        }
      </style>

      <div class="box">
        <div class="header">
          <img src="${icon}" alt="Recent task icon">
          <span>${title}</span>
        </div>

        <div class="empty-state">
          <img src="${emptyIcon}" alt="empty">
          <span>${emptyText}</span>
        </div>
      </div>
    `;
  }
}

customElements.define("recent-task", RecentTask);
