import { ListProps } from "../types"

// Only Interface can EXTENDS from another interface 
interface ItemProp extends ListProps {
  selectedTask: (selTask: ListProps) => void
}

const ItemForm = ({task, time, selected, completed, id, selectedTask} : ItemProp) => {
  
  return (
    <div onClick={() => !completed && selectedTask({task, time, selected, completed, id})}>
      <li className={`mt-2 bg-[#88BCD1] ${selected && "bg-red-300"} ${completed && "bg-green-500"} p-3 rounded-lg md:w-96 max-md:w-60`}>
        <h2 className="font-bold">{task}</h2>

        <div className="flex justify-between">
          <p>{time}</p>
          {completed && <p>✅</p>}
        </div>
      </li>
    </div>
  )
}

export default ItemForm