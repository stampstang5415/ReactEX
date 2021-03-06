import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import CounterComponent from "./App";
import * as serviceWorker from "./serviceWorker";
// const Todo = [
//   {
//     id: "57b6e152-f7e8-4ff7-a872-7ac734d81940",
//     title: "Download SQL Server",
//     completed: true
//   },
//   {
//     id: "eee5a72e-0627-4340-80f0-f68b652fe1d4",
//     title: "Start the Installation Wizard",
//     completed: false
//   },
//   {
//     id: "808aa9b0-f00c-4130-8c39-3093d38192d0",
//     title: "Product Key",
//     completed: false
//   },
//   {
//     id: "e3bca651-9593-4815-875b-503395f27f42",
//     title: "License Terms",
//     completed: false
//   },
//   {
//     id: "726088ec-98ff-4f01-8569-8979504a9c3d",
//     title: "Microsoft Update",
//     completed: false
//   },
//   {
//     id: "a6bd09f1-d1d4-4f0e-9e24-f6f71af409f2",
//     title: "Cat&Dog",
//     completed: false
//   },
//   {
//     id: "f0740d35-37db-4acf-88e8-0289466ae3be",
//     title: "Dog",
//     completed: false
//   },
//   {
//     id: "d51a8c9f-1d05-41e4-b773-8ba56b7a90f4",
//     title: "cat",
//     completed: false
//   },
//   {
//     id: "2317b774-f55e-44a3-bad6-094d547e12b4",
//     title: "k",
//     completed: true
//   }
// ];
ReactDOM.render(<CounterComponent />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
