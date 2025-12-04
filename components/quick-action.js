class QuickAction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          height: 346px;
          width: 548px;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          padding: 24px;
          background: white;
          box-sizing: border-box;
        }

        .title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .title img {
          width: 18px;
          height: 18px;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      </style>

      <div class="container">
        <div class="title">
          <img src="../assets/images/arrow-3.svg">
          Quick Actions
        </div>

        <div class="actions">

          <quick-action-card  
            icon="../assets/images/checkbox-3.svg"
            title="Create New Task"
            subtitle="Add a task to your list"
            bg = "#DBEAFF"
            >
          </quick-action-card>

          <quick-action-card  
            icon="../assets/images/dollar-2.svg"
            title="Track Expense"
            subtitle="Record a new expense"
            bg = "#CEFAFE">
          </quick-action-card>

          <quick-action-card  
            icon="../assets/images/notes-1.svg"
            title="Write Note"
            subtitle="Capture your thoughts"
            bg = "#DCFCE6">
      
          </quick-action-card>

        </div>
      </div>
    `;
  }
}

customElements.define("quick-action", QuickAction);
