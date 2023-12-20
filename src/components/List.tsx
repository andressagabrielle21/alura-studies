import ItemForm from "./ItemForm"
import { ListProps } from "../types"

type SelectedProp = {
  taskList: ListProps[],
  selectedTask: (selTask: ListProps) => void
}

// The prop taskList is from the type object taskList, that is from the type ListProps, which NEEDS to be defined as an ARRAY too
// string[] -> Array of strings
// Array<ListProps> works the same
const List = ({taskList, selectedTask} : SelectedProp)=> {

  return (
    <div className="flex flex-col items-center p-8 gap-5">
      <h1 className="text-2xl font-bold text-center">Choose what you gonna do next</h1>
      <div>
        <ul>
          {taskList.map((item, index) => (
            <ItemForm selectedTask={selectedTask} key={index} {...item}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List