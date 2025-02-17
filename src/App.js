import "./App.css";

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Setting from "./pages/Setting";
import Product from "./pages/Product";
import OrdersManagement from "./pages/Order";
import OrdersCalendarView from "./pages/OrdersCalendarView";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/product" exact element={<Product />}></Route>
          <Route path="/order" exact element={<OrdersManagement />}></Route>
          <Route
            path="/ordercal"
            exact
            element={<OrdersCalendarView />}
          ></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/settings" exact element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
