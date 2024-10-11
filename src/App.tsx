import { useState } from "react";
import "./App.css";
import Objective from "./Objective";
import Sequence from "./Sequence";

function App() {

  const [editting, setEditting] = useState(false);
  const [message, setMessage] = useState("");


  return (
    <div className="p-4 h-svh">
      <div className="grid gap-4 place-content-center h-full">
        <Sequence />

        <Objective />
        <div className="text-center [&:hover&_.edit]:inline-block">
          {Boolean(editting) && (
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          )}

          <div className="flex justify-center items-center">
            <p className={["message", ...(!message ? ["text-gray-500"] : [])].join(" ")}>
              {message || "どのタイミングでカウントしますか？"}
            </p>
            <button
              onClick={() => { setEditting((prev) => !prev); }}
              className="btn btn-xs edit hidden"
            >
              {editting ? "Save" : "Edit"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
