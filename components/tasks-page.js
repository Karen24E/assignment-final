  class TasksPage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = `
      <style>

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .page {
          width: 1120px;
          margin: 33px;
          border-radius: 8px;
          box-shadow: 0 0 6px rgba(0,0,0,0.2);
        }

        /* ================= HEADER ================= */
        .first {
          width: 1118px;
          height: 97px;
          padding: 24px;
          background: oklch(0.985 0.002 247.839);
          display: flex;
          align-items: center;
        }

        .header {
          width: 1070px;
          height: 48px;
          display: flex;
          align-items: center;
        }

        .checkbox-image {
          width: 40px;
          height: 40px;
          background: #165DFC;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }

        .checkbox-image img {
          width: 20px;
          height: 20px;
        }

        .title { font-size: 18px; font-weight: 600; color: #1E293B; }
        .subtitle { font-size: 14px; color: oklch(0.551 0.027 264.364); }

        hr { opacity: 0.2; }

        /* ================= MAIN CONTENT ================= */
        .second {
          width: 1118px;
          padding: 24px;
          margin-top: 24px;
          transition: height 0.25s ease;
        }

        .myTasksHeight { height: 368px !important; }

        .summaryHeight {
          height: auto !important;
          min-height: 500px !important;
        }

        /* ================= TABS ================= */
        .buttons {
          width: 253px;
          height: 40px;
          background: #F3F4F6;
          display: flex;
          border-radius: 8px;
          margin-bottom: 32px;
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          border-radius: 8px;
        }

        .tab-btn img { width: 16px; }
        .tab-btn p { font-size: 14px; font-weight: 500; }

        .active-tab {
          background: white !important;
        }

        /* ================= TAB VISIBILITY ================= */
        .view {
          display: none !important;   /* overrides external CSS */
        }

        .view.active-view {
          display: block !important;
        }

        /* ================= MY TASKS ================= */
        .tasks-container {
          width: 1070px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .task-stats-row {
          width: 1070px;
          height: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .task-stat {
          width: 198px;
          height: 56px;
          display: flex;
        }

        .left-side, .right-side {
          width: 78px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;}
       
          
        

        .active-tasks, .complete {
          font-size: 30px;
          font-weight: 600;
        
        }
         
        .complete { color: green; 
        }

        .task-stat-label,
        .complete-task {
          font-size: 14px;
          color: gray;
        //   margin-right:20px;
        }

        .add-task-btn {
          width: 108px;
          height: 36px;
          background: #165DFC;
          color: white;
          border-radius: 6px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
         
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .task-card {
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .empty-slate-1 {
          width: 1066px;
          height: 164px;
          border: 1px dashed #88a3be;
          border-radius: 8px;
          background: #F9FAFB;
          display: flex;
          align-items: center;
          justify-content: center;
          color:rgb(100, 116, 139);
        }

        /* ================= AI SUMMARY (refined) ================= */
        #ai-summary-view {
          width: 1070px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 8px;
        }

        .summary-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
     

        .summary-text h1 {
          font-size: 18px;
          font-weight: 600;
          color: #1E293B;
          margin-bottom:8px;
        }

        .summary-text h2 {
          font-size: 14px;
          font-weight: 400;
          color: #64748B;
          margin-bottom: 24px;
          
        }

        .generate-btn {
          background: #9FC1FC;
          color: white;
          border-radius: 6px;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          cursor: pointer;
        }

        .summary-tabs {
          width: 291px;
          height: 40px;
          border-radius: 8px;
          background: #F3F4F6;
          display: flex;
          padding: 4px;
        }

        .summary-tab-btn {
          flex: 1;
          height: 32px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .summary-tab-active {
          background: white !important;
        }

        .summary-empty-box {
          width: 100%;
          height: 208px;
          border: 1px dashed #88a3be;
          border-radius: 8px;
          background: #F9FAFB;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top:25px;
        }

        .summary-empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .summary-empty-content img {
          width: 48px;
          height: 48px;
        }

        .summary-empty-line1 {
          font-size: 18px;
          color: oklch(0.551 0.027 264.364);
        }

        .summary-empty-line2 {
          font-size: 14px;
          color: oklch(0.551 0.027 264.364);
        }

        /* ================= MODAL ================= */
        .modal {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.45);
          display: none;
          justify-content: center;
          align-items: center;
        }

        .modal.active-view { display: flex !important; }

        .modal-content {
          width: 420px;
          background: white;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-header {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .modal-header h2{
        font-size:20px;
        font-weight:600;
        line-height:28px;
         }

         .modal-header p{
         color:rgb(100, 116, 139);
         font-size:14px;
         font-weight:400;}

        .input-label { font-size: 14px; }
        .input-box, .textarea {
          width: 100%;
          border: 1px solid #CBD5E1;
          padding: 8px;
          border-radius: 6px;
        }

        .textarea {
          height: 90px;
          resize: none;
        }
     

        .row { display: flex; gap: 12px; }
        .column { flex: 1; display: flex; flex-direction: column; }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .cancel-btn {
          padding: 8px 16px;
          background: #F1F5F9;
          border-radius: 6px;
          border:none;
        
        }

        .create-btn {
          padding: 8px 16px;
          background: #1447E6 ;
          color: white;
          border-radius: 6px;
          border:none;
        }

      </style>

      <!-- ================= PAGE ================= -->
      <div class="page">

        <!-- HEADER -->
        <div class="first">
          <div class="header">
            <div class="checkbox-image">
              <img src="/assets/images/checkbox.svg">
            </div>
            <div>
              <div class="title">Task Management</div>
              <div class="subtitle">manage and track your tasks</div>
            </div>
          </div>
        </div>

        <hr>

        <!-- CONTENT -->
        <div id="second" class="second myTasksHeight">

          <div class="buttons">
            <div class="tab-btn active-tab button-1"><img src="/assets/images/timer-2.svg"><p>My Tasks</p></div>
            <div class="tab-btn button-2"><img src="/assets/images/summary.svg"><p>AI Summary</p></div>
          </div>

          <!-- ================= MY TASKS ================= -->
          <div id="tasks-view" class="view active-view">

            <div class="tasks-container">

              <div class="task-stats-row">
                <div class="task-stat">
                  <div class="left-side">
                    <div class="active-tasks">0</div>
                    <div class="task-stat-label">Active tasks</div>
                  </div>

                  <div class="right-side">
                    <div class="complete">0</div>
                    <div class="complete-task">Completed</div>
                  </div>
                </div>

                <button class="add-task-btn">
                  <img src="/assets/images/plus.svg">Add Task
                </button>
              </div>

              <div class="task-list"></div>

              <div class="empty-slate-1 no-tasks">
                <div style="text-align:center">
                  <img src="/assets/images/circle.svg" width="48">
                  <p>No tasks yet</p>
                  <small>Click “Add Task” to create your first task</small>
                </div>
              </div>

            </div>
          </div>

          <!-- ================= AI SUMMARY ================= -->
          <div id="ai-summary-view" class="view">

            <div class="summary-header">
              <div class="summary-text">
                <h1>AI-Powered Task Summary</h1>
                <h2>Get insights and recommendations for your tasks</h2>
              </div>

              <button class="generate-btn">
                <img src="/assets/images/sparkles3.svg">
                <span>Generate New</span>
              </button>
            </div>

            <div class="summary-tabs">
              <div class="summary-tab-btn summary-tab-active">
                <img src="/assets/images/summary.svg">
                <p>Latest Summary</p>
              </div>

              <div class="summary-tab-btn">
                <img src="/assets/images/timer-2.svg">
                <p>History (0)</p>
              </div>
            </div>

            <div class="summary-empty-box">
              <div class="summary-empty-content">
                <img src="/assets/images/summary2.svg">
                <div class="summary-empty-line1">No summary generated yet</div>
                <div class="summary-empty-line2">Click "Generate New" to get AI-powered insights</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- ================= MODAL ================= -->
      <div id="task-modal" class="modal">
        <div class="modal-content">

          <div class="modal-header">
            <img src="/assets/images/sparkles.svg" width="20">
            <div>
              <h2>Create New Task</h2>
              <p>Add a new task to your productivity list</p>
            </div>
          </div>
      
          <label class="input-label">Title</label>
          <input id="task-title" class="input-box" placeholder="Enter your task title">

          <label class="input-label">Description</label>
          <textarea id="task-desc" class="textarea" placeholder="Add task details"></textarea>

          <div class="row">
            <div class="column">
              <label class="input-label">Priority</label>
              <select id="task-priority" class="input-box">
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>

            <div class="column">
              <label class="input-label">Due Date</label>
              <input id="task-date" type="date" class="input-box">
            </div>
          </div>

          <div class="modal-footer">
            <button id="close-modal-btn" class="cancel-btn">Cancel</button>
            <button id="create-task-btn" class="create-btn">Create Task</button>
          </div>

        </div>
      </div>

    `;

      /* ============================================================
       JS LOGIC
    ============================================================ */

      const root = this.shadowRoot;

      // Tabs
      const btnMyTasks = root.querySelector(".button-1");
      const btnSummary = root.querySelector(".button-2");
      const tasksView = root.getElementById("tasks-view");
      const summaryView = root.getElementById("ai-summary-view");
      const second = root.getElementById("second");

      // Modal elements
      const modal = root.getElementById("task-modal");
      const openModalBtn = root.querySelector(".add-task-btn");
      const closeModalBtn = root.getElementById("close-modal-btn");
      const createTaskBtn = root.getElementById("create-task-btn");

      // Inputs
      const titleInput = root.getElementById("task-title");
      const descInput = root.getElementById("task-desc");
      const priorityInput = root.getElementById("task-priority");
      const dateInput = root.getElementById("task-date");

      // Counters
      const activeCount = root.querySelector(".active-tasks");
      const completedCount = root.querySelector(".complete");

      // Task list + empty message
      const taskList = root.querySelector(".task-list");
      const noTasksBox = root.querySelector(".no-tasks");

      let activeTasks = 0;
      let completedTasks = 0;

      /* ===== TAB SWITCHING ===== */

      btnMyTasks.addEventListener("click", () => {
        tasksView.classList.add("active-view");
        summaryView.classList.remove("active-view");

        btnMyTasks.classList.add("active-tab");
        btnSummary.classList.remove("active-tab");

        second.classList.add("myTasksHeight");
        second.classList.remove("summaryHeight");
      });

      btnSummary.addEventListener("click", () => {
        summaryView.classList.add("active-view");
        tasksView.classList.remove("active-view");

        btnSummary.classList.add("active-tab");
        btnMyTasks.classList.remove("active-tab");

        second.classList.add("summaryHeight");
        second.classList.remove("myTasksHeight");
      });

      /* ===== MODAL LOGIC ===== */
      openModalBtn.addEventListener("click", () => {
        modal.classList.add("active-view");
      });

      closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("active-view");
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active-view");
      });

      /* ===== CREATE TASK ===== */
      createTaskBtn.addEventListener("click", () => {
        const title = titleInput.value.trim();
        if (!title) return alert("Title is required.");

        addTask(title, descInput.value, priorityInput.value, dateInput.value);

        // Clear modal
        titleInput.value = "";
        descInput.value = "";
        dateInput.value = "";

        modal.classList.remove("active-view");
      });

      function addTask(title, desc, priority, date) {
        noTasksBox.style.display = "none";

        activeTasks++;
        activeCount.textContent = activeTasks;

        const card = document.createElement("div");
        card.className = "task-card";
        card.innerHTML = `
        <div>
          <input type="checkbox" class="complete-box">
          <strong>${title}</strong><br>
          <small>${priority} • ${date || "No date"}</small>
        </div>
      `;

        taskList.appendChild(card);

        const checkbox = card.querySelector(".complete-box");

        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            activeTasks--;
            completedTasks++;
          } else {
            activeTasks++;
            completedTasks--;
          }

          activeCount.textContent = activeTasks;
          completedCount.textContent = completedTasks;

          if (activeTasks === 0 && completedTasks === 0) {
            noTasksBox.style.display = "flex";
          }
        });
      }
    }
  }

  customElements.define("task-page", TasksPage);