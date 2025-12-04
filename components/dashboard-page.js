class DashboardPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .page-container {
          padding: 32px;
        }

        .greeting {
          font-size: 30px;
          font-weight: bold;
          margin: 0;
          line-height: 36px;
        }

        .subtext {
          font-size: 16px;
          color: #6A7282;
          margin-bottom: 32px;
          margin-top: 4px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 262px);
          gap: 26px;
        }

        .second-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          margin-top: 32px;
        }
      </style>

      <div class="page-container">

        <div class="greeting">Good evening, Animbom Odette!</div>
        <div class="subtext">Here’s what’s happening with your productivity today</div>

        <!-- FIRST GRID -->
        <div class="stats-grid">

          <stats-box 
            title="Active Tasks" 
            number="0" 
            subtitle="0 completed" 
            icon="/assets/images/checkbox.svg"
            color="#165DFC">
          </stats-box>

          <stats-box 
            title="Total Expenses" 
            number="$0.00" 
            subtitle="This period" 
            icon="/assets/images/dollar icon.svg"
            color="#0092B9">
          </stats-box>

          <stats-box 
            title="Total Notes" 
            number="0" 
            subtitle="Saved notes" 
            icon="/assets/images/notes.svg"
            color="#00A63D">
          </stats-box>

          <stats-box 
            title="Completion Rate" 
            number="0%" 
            subtitle="Task completion" 
            icon="/assets/images/arrow.svg"
            color="#0092B9">
          </stats-box>

        </div>

        <!-- SECOND GRID (RECENT TASK + QUICK ACTIONS) -->
        <div class="second-grid">

          <recent-task
            icon="/assets/images/timer.svg"
            empty-icon="/assets/images/checkbox-2.svg"
            empty-text="No task yet">
          </recent-task>

          <quick-action></quick-action>

        </div>

      </div>
    `;
  }
}

customElements.define("dashboard-page", DashboardPage);
