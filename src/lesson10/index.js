import React, { useState, createContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout, LoginP } from "./comps";
import SignIn from "./comps/SignIn";
import Signup from "./comps/Signup";
import { CatigoryP, HomeP, SpecifiCategoryP } from "./pages";
import uuid from "react-uuid";
import OperationsP from "./pages/OperationsP";

export const Context = createContext();

const Index = () => {
  const [categories, setCategories] = useState([
    { name: "ovqat", id: uuid() },
    { name: "transport", id: uuid() },
  ]);
  const [costs, setCosts] = useState([]);
  const [data, setArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [token, setToken] = useState(false);

  const [button, setButton] = useState(true);
  const [chartArr, setChartArr] = useState([]);
  const [takeDesc, setTakeDesc] = useState("");
  const [operat, setOperat] = useState([]);
  const [dateD, setDateD] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth().toString().length == 1
        ? "0" + new Date().getMonth()
        : new Date().getMonth()) +
      "-" +
      (new Date().getDay().toString().length == 1
        ? "0" + new Date().getDay()
        : new Date().getDay()) +
      "T" +
      new Date().getHours() +
      ":" +
      new Date().getMinutes()
  );
  const [isExist, setIsExist] = useState({
    price: false,
    desc: false,
    dateTime: false,
  });

  const [cost, setCost] = useState({
    category: categories[0].name,
    dateTime: dateD,
  });
  const state = {
    categories,
    setCategories,
    costs,
    setCosts,
    token,
    setToken,
    data,
    setArr,
    isOpen,
    setIsOpen,
    button,
    setButton,
    takeDesc,
    setTakeDesc,
    cost,
    setCost,
    chartArr,
    setChartArr,
    operat,
    setOperat,
    isExist,
    setIsExist,
    dateD,
  };
  const closeModal = () => {
    setIsOpen(false);
    setCost({});
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const edit = (item) => {
    openModal();
    setTakeDesc(item.desc);
    setButton(true);

    setCost({
      price: item.price,
      category: item.category,
      desc: item.desc,
      dateTime: item.dateTime,
    });
  };
  return (
    <Context.Provider value={state}>
      <ToastContainer autoClose={5000} />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginP />}></Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route
                index
                path=""
                element={
                  <HomeP
                    closeModal={closeModal}
                    openModal={openModal}
                    edit={edit}
                  />
                }
              />
              <Route path="/category" element={<CatigoryP />} />
              <Route
                path="/category/:obj"
                element={
                  <SpecifiCategoryP
                    edit={edit}
                    closeModal={closeModal}
                    openModal={openModal}
                  />
                }
              />
              <Route path="/operations" element={<OperationsP />} />

              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
};

const PrivateRoute = () => {
  const auth = localStorage.getItem("TOKEN");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default Index;
