import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function App() {
  const [count, setCount] = useState(1);
  const [msg,setMsg]=useState("Good To Go...");
  const counting = async (cnt) => {
    try {
      let data = await axios.post("http://localhost:3000/getValue", {
        num: cnt,
      });
      let _msg= data.data.msg;
      if (_msg) {
        notify(_msg);
        setMsg(_msg);
      }else{
        notify("No Message !!!");
        setMsg("No Message !!!");
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
        Hello , <br/> <span className="bg-accent">{msg}</span>
      </h1>
      <h1 className="text-4xl mt-3 mb-3 ">{count-1}</h1>
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
