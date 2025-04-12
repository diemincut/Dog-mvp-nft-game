import React, { useEffect, useState } from "react";

export default function Tasks() {
  const [dog, setDog] = useState(null);
  const [completed, setCompleted] = useState({ feed: false, groom: false, play: false, train: false });

  useEffect(() => {
    const saved = localStorage.getItem("starterDog");
    if (saved) setDog(JSON.parse(saved));
  }, []);

  function completeTask(task) {
    setCompleted(prev => ({ ...prev, [task]: true }));
  }

  if (!dog) return <p className="p-4">No dog available.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Daily Tasks for {dog.name}</h1>
      <div className="grid gap-4">
        {Object.entries(completed).map(([task, done]) => (
          <button
            key={task}
            onClick={() => completeTask(task)}
            disabled={done}
            className={\`w-full px-4 py-2 rounded-xl text-white \${done ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"}\`}
          >
            {done ? \`\${task[0].toUpperCase() + task.slice(1)}ed!\` : task[0].toUpperCase() + task.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}