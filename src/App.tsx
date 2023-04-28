import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import cityApi from "apis/citiApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoute } from "Router/Router";
import PrivateRoutes from "Router/PrivateRoutes";

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((item, index) => {
          const Page = item.component;
          return (
            <Route key={index} path={item.path} element={<Page />}></Route>
          );
        })}
        <Route element={<PrivateRoutes />}>
          {privateRoute.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
