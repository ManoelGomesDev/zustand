
export function TaskItem() {
    return (
   <ul className="flex flex-col gap-6 w-full max-w-[600px]" >
    <li className="bg-slate-100 w-full rounded p-2 flex items-center justify-between relative">
        <p className="break-all">Estudar Javascript</p>
        <div className="flex gap-2 absolute -bottom-4 right-0">
            <button className="bg-red-500 px-2 rounded text-white font-medium">Excluir</button>
            <button className="bg-green-500 px-2 text-white rounded font-medium">Editar</button>
        </div>
    </li>
   </ul>
    )
}