import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex">
      <div
        className={`${
          clicked ? "w-24" : "w-72"
        } h-full sm:hidden hidden md:block transition-all ease-in-out duration-[400ms]`}
      >
        <Sidebar onHandleClick={setClicked} clicked={clicked} />
      </div>
      <div className="w-full h-full">
        <Main onHandleClick={setClicked} clicked={clicked} />
      </div>
    </div>
  );
}

export default App;
