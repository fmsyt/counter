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

        {!editting && (
          <div className="text-center [&:hover&_.edit]:inline-block">
            <div className="flex justify-center items-center">
              <p className={["message", ...(!message ? ["text-gray-500"] : [])].join(" ")}>
                {message || "どのタイミングでカウントしますか？"}
              </p>
              <button
                onClick={() => { setEditting(true) }}
                className="btn btn-xs btn-circle edit hidden"
              >
                <span className="material-symbols-outlined">
                  edit
                </span>
              </button>
            </div>
          </div>
        )}

        {editting && (
          <div className="join">
            <input
              type="text"
              className="input input-bordered input-sm join-item"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="btn btn-primary btn-sm join-item"
              onClick={() => { setEditting(false) }}
            >
              <span className="material-symbols-outlined">
                check
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
