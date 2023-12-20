import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"
import Timer from "./components/Timer"
import { ListProps } from "./types"

const App = () => {
  //useState tells React to reload ONLY this component
  // The communication between two components is's ALWAYS from PARENT to CHILDREN
  const [taskList, setTaskList] = useState<ListProps[] | []>([])
  const [selected, setSelected] = useState<ListProps>();

  const selectedTask = (selTask: ListProps) => {
    setSelected(selTask)
    setTaskList(tasks => tasks.map((item) => ({...item, selected: item.id === selTask.id ? true : false})))
  } 

  const endTask = () => {
    if (selected) {
      setSelected(undefined);
      setTaskList(tasks => tasks.map((item) => { 
        if (item.id === selected.id) {
          return {...item, selected: false, completed: true}
        }
        return item
      }))
    }
  }

  return (
    <main className="bg-black text-white min-h-screen w-screen flex max-md:flex-col-reverse max-md:py-10 gap-10 items-center justify-center">      
      <div className="flex flex-col max-md:flex-col-reverse gap-8 md:w-2/4 max-md:px-10">
        <Form submitForm={setTaskList}/>
        <Timer selected={selected} endTask={endTask}/>
      </div>

      <div className="md:w-1/3">
        <List taskList={taskList} selectedTask={selectedTask}/>
      </div>
    </main>
  )
}

export default App