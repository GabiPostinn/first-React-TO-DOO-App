import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Put Turbo On Car.",
      status: "TODO",
      dueDate: new Date(2026, 1, 23), // Asta nu inteleg cu "new Date"
    },
    // prettier-ignore
    { id: "T-2",
      name: "Clean Your Room.",
      status: "Completed",
      dueDate: new Date(2025, 7, 15) 
    },
    // prettier-ignore
    { id: "T-3",
      name: "Learn Js.",
      status: "In Progress",
      dueDate: new Date(2026, 7, 15)
    },
    //prettier-ignore

    { id: "T-4",
      name: "Upgrade Your Car.",
      status: "In Progress",
      dueDate: new Date(2027, 2, 19)
    },
    {
      id: "T-5",
      name: "Buy A Dog ''Golden Retriver''.",
      status: "Completed",
      dueDate: new Date(2025, 6, 11),
    },
    {
      id: "T-5",
      name: "Get A Job On Front End Developer.",
      status: "TODO",
      dueDate: new Date(2025, 6, 11),
    },
    {
      id: "T-5",
      name: "Learn How To Invest Your Money.",
      status: "In Progress",
      dueDate: new Date(2025, 6, 11),
    },
  ];
  // prettier-ignore
  return (
    <div className="app-container">

      {data.map((task) => ( // MAP metoda care trece prin fiecare element din DATA

      <TaskCard
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
