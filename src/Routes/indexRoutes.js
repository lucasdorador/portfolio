import React from "react";
import { Routes, Route } from "react-router-dom";
import MainRoutes from "../Pages/Main/indexMainRoutes";

// import RotasCadastros from "../pages/RotasCadastros/RotasCadastros";
// import RotasListagens from "../pages/RotasListagem/RotasListagens";

const pathMain = "/";

const Routesindex = () => {
  return (
    <Routes>
      {/* <Route path="/cadastros" component={RotasCadastros} />
      <Route path="/listagens" component={RotasListagens} /> */}
      {/* <Route path="/" element={<Home />} /> */}
      <Route
        path={pathMain}
        element={<MainRoutes match={{ path: pathMain }} />}
      />
    </Routes>
  );
};

export default Routesindex;
