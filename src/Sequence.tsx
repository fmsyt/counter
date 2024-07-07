import "material-symbols";
import { useCallback, useState } from "react";

export default function Sequence() {

  const [count, setCount] = useState(0)

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

  return (
    <div
      className="flex items-center justify-center gap-4"
    >
      <button
        className="btn btn-outline btn-circle"
        onClick={decrement}
      >
        <span className="material-symbols-outlined">
          remove
        </span>
      </button>

      <div>{count}</div>

      <button
        className="btn btn-outline btn-circle"
        onClick={increment}
      >
        <span className="material-symbols-outlined">
          add
        </span>
      </button>
    </div>
  )
}
