import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function App() {
  const [count, setCount] = useState(0);
  const counting = async (cnt) => {
    console.log(cnt);
    try {
      let data = await axios.post("http://localhost:4000/getValue", {
        num: cnt,
      });
      if (data.data.msg) {
        notify(data.data.msg);
      }else{
        notify("No Message !!!");
      }
    } catch (error) {
      notify("Request Failed");
    }
  };
  const notify = (_msg) =>
    toast(_msg, {
      theme: "dark",
      position: "top-center",
    });
  return (
    <div className="App">
      <h1 className="text-xl font-bold text-white">
        Hello , <span className="bg-accent">Bunzzz</span>
      </h1>
      <h1 className="text-4xl mt-3 mb-3 ">{count}</h1>
      <button
        className="btn btn-outline btn-accent"
        onClick={() => {
          setCount(count+1);
          console.log("count",count)
          counting(count)
        }}
      >
        Push Bunzz
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
