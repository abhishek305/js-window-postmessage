import React, { useEffect, useState } from "react";

export function Home() {
  const [childMessage, setChildMessage] = useState("");

  const click = () => {
    const windowProps = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=1200, height=800`;
    const popup = window.open("http://localhost:3000/popup", "Pop up window", windowProps);
    popup?.postMessage("message", "http://localhost:3000");
  };

  const clear = () => {
    setChildMessage("");
  };

  useEffect(() => {
    const childResponse = (event) => {
      if (event?.data) {
        setChildMessage(event.data);
      }
    };
    window.addEventListener("message", childResponse);
    return () => window.removeEventListener("message", childResponse);
  }, []);

  return (
    <div className="App">
      <h1> Parent Window </h1>
      <button onClick={click}>Click</button> <button onClick={clear}>Clear text</button>
      <h3>{childMessage.length > 0 ? `Hello ${childMessage} !!` : "No responses from child"}</h3>
    </div>
  );
}
