import { useCallback, useState } from "react";

export default function Objective() {

  const [count, setCount] = useState(0)
  const [goal, setGoal] = useState(10)

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const getProgressColor = useCallback((count: number, goal: number) => {
    if (count === goal) {
      return "progress-success";
    }

    if (count > goal) {
      return "progress-warning";
    }

    return "progress-primary";
  }, [])

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-center gap-4" >
        <button
          className="btn btn-outline btn-circle"
          onClick={decrement}
        >
          <span className="material-symbols-outlined">
            remove
          </span>
        </button>

        <div className="grid grid-cols-[1fr,_1em,_1fr]">
          <span className="text-right">{count}</span>
          <span className="text-center">/</span>
          <span className="text-right">{goal}</span>
        </div>

        <button
          className="btn btn-outline btn-circle"
          onClick={increment}
        >
          <span className="material-symbols-outlined">
            add
          </span>
        </button>
      </div>

      <progress
        className={`progress ${getProgressColor(count, goal)} w-56`}
        value={count}
        max={goal}
      />
    </div>
  )
}
