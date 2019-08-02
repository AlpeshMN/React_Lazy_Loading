// import lazy and Suspense from react.
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import MyComp from "./components/myComp";

// use lazy call back fun and wrap component inside it.
const MyComp = lazy(() => import("./components/myComp"));

function App() {
  return (
    // use Suspense wherever you want to lazy load comonent.
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComp />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// hard to see fallback component on high internet speed
// test it with slow internet
