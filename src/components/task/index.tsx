import { FormEvent, useState } from "react";
import { TaskItem } from "./item";

export function TaskList() {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    setNewTask("");
  };

  return (
    <main className="w-full h-screen flex items-center flex-col px-4 pt-10">
      <span className="text-red-500 self-start">
        Você tem 0 tarefas em aberto
      </span>
      <form
        className="flex gap-4 rounded-md w-full max-w-[600px] mb-6"
        onSubmit={handleAddTask}
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma tarefa"
          className="rounded px-2 w-full h-8"
        />
        <button type="submit" className="bg-slate-100 px-4 rounded h-8">
          Adicionar
        </button>
      </form>
      <TaskItem />
    </main>
  );
}
