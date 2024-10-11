import { useState } from "react";
import "./App.css";
import Objective from "./Objective";

function App() {

  const [editting, setEditting] = useState(false);
  const [message, setMessage] = useState("");


  return (
    <div className="p-4 h-svh">
      <div className="grid gap-4 place-content-center h-full">

        <Objective />
        <div className="text-center [&:hover&_.edit]:inline-block">
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

          {Boolean(editting) && (
            <input
              type="text"
              className="input input-bordered input-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
