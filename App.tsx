import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [data, setData] = useState("")
  const tt = fetch("http://192.168.0.39:16000/restMainService/getEmpresas")
  tt.then((data) => {
    console.log(data)
    if (data.ok) {
      data.text().then( (text) => setData(text))
    }
  })
  return (
    <div>Hello, esbuild! { data }</div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
