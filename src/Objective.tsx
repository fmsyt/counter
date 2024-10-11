import "material-symbols";
import { useCallback, useState } from "react";

export default function Objective() {

  const [editting, setEditting] = useState(false);
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

        {!editting && (
          <button
            type="button"
            className={[
              "btn btn-ghost btn-xs text-base",
              ...[goal > 0 ? ["grid grid-cols-[1fr,_1em,_1fr] gap-0"] : []]
            ].join(" ")}
            onClick={() => { setEditting((prev) => !prev); }}
          >
            <span className="text-right">{count}</span>
            {goal > 0 && (
              <>
                <span className="text-center">/</span>
                <span className="text-right">{goal}</span>
              </>
            )}
          </button>
        )}

        {editting && (
          <div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-right">{count}</span>
              <span className="text-center">/</span>
              <input
                type="number"
                value={goal}
                className="input input-bordered input-sm w-16"
                min={0}
                onChange={(e) => setGoal(Number(e.target.value))}
              />
              <button
                onClick={() => { setEditting((prev) => !prev); }}
                className="btn btn-xs edit"
              >
                Save
              </button>
            </div>

          </div>
        )}

        <button
          className="btn btn-outline btn-circle"
          onClick={increment}
        >
          <span className="material-symbols-outlined">
            add
          </span>
        </button>
      </div>

      {goal > 0 && (
        <progress
          className={`progress ${getProgressColor(count, goal)} w-56`}
          value={count}
          max={goal}
        />
      )}
    </div>
  )
}
