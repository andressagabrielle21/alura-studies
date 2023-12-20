import { useState } from "react"
import Button from "./Button"
import { ListProps } from "../types"
// To create a random ID 
import { v4 as uuidv4 } from "uuid";

type FormProps = {
  submitForm: React.Dispatch<React.SetStateAction<ListProps[]>>
}

const Form = ({submitForm} : FormProps) => {
  const [task, setTask] = useState({
    task: "",
    time: "00:00"
  });

  // To type an Event in TypeScript
  const storeNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault() PREVENTS the form to reload the page whenever its submitted, but it DOESNT prevent the form to be submitted
    e.preventDefault();
    submitForm(prevState => [
      ...prevState, 
      {...task,
        selected: false,
        completed: false,
        id: uuidv4()
      }
    ]);

    setTask({
      task: "",
      time: "00:00"
    })
  }

  return (
    <div className="bg-[#7686A1] p-8 rounded-lg">
      <form onSubmit={storeNewTask}>
        <div className="flex flex-col mb-5 gap-2">
          <label htmlFor="task" className="text-lg">Add a new chore</label>
          <input className="bg-[#5E677D] p-4 rounded-lg" value={task.task} onChange={(e) => setTask({...task, task: e.target.value})} type="text" placeholder="What do you need to do?" name="task" id="task" required/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="task" className="text-lg">Add a new study time</label>
          <input className="bg-[#5E677D] p-4 rounded-lg" value={task.time} onChange={(e) => setTask({...task, time: e.target.value})} step="1" min="00:00:00" max="03:00:00" type="time" placeholder="Time" name="title" id="time" required/>
        </div>

        <div className="flex justify-end mt-5">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  )
}

export default Form