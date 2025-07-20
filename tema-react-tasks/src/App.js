import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
   const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-3",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-4",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Done",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-4",
      name: "13 Create a Design System for Enum Workspace.",
      status: "In progress",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-5",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-6",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2021, 1, 24),
    },
  ];

  return (
   <div className="app-container">
      {data.map((task) => (
        <TaskCard
          key={task.id} 
          id={task.id}
          name={task.name}
          status={task.status}
          dueDate={task.dueDate}
        />
      ))}
    </div>
  );
}

export default App;
