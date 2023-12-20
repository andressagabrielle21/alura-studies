import { useEffect, useState } from "react"
import { ListProps } from "../types"
import Button from "./Button"
import { timeToSeconds } from "../utils/time"
type TimerProps = {
  selected: ListProps | undefined,
  endTask: () => void
}

const Timer = ({selected, endTask} : TimerProps) => {
  const [timePasses, setTimePasses] = useState<number>(0)
  const [color, setColor] = useState<string>("white")

  // You should only render this snippet when the selected value changes
  useEffect(() => {
    // This snippet was rerendering infite
    if (selected?.time) {
      setTimePasses(timeToSeconds(selected.time))
    }
  }, [selected])

  const minutes = Math.floor(timePasses / 60)
  const seconds = timePasses % 60

  const [decimalHours, decimal, unity] = String(minutes).padStart(3, '0')
  const [decimalSeconds, unitySeconds] = String(seconds).padStart(2, '0')

  const timerRegressive = (timer: number = 0) => {
    // Recursive Function
    setTimeout(() => {
      if (timer > 0) {
        setTimePasses(timer - 1)
        setColor("red")
        return timerRegressive(timer - 1)
      }
      setColor("white")
      endTask()
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl font-bold text-center">Choose your card and start your time</p>

      <div className={`md:text-8xl max-md:text-6xl text-center ${color === "red" ? "text-red-300" : "text-white"}`}>
        {decimalHours !== "0" && <span>{decimalHours}</span>}
        <span>{decimal}</span>
        <span>{unity}</span>
        <span>:</span>
        <span>{decimalSeconds}</span>
        <span>{unitySeconds}</span>
      </div>

      <div className="text-center">
        <Button onClick={() => timerRegressive(timePasses)}>
          Start
        </Button>
      </div>
    </div>
  )
}

export default Timer