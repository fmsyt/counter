import "./App.css";
import Objective from "./Objective";
import Sequence from "./Sequence";

function App() {

  return (
    <div className="p-4 h-svh">
      <div className="grid gap-4 place-content-center h-full">
        <Sequence />

        <Objective />
      </div>
    </div>
  );
}

export default App;
