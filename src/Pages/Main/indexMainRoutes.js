import React, { lazy, Suspense } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes, Redirect } from "react-router-dom";
// import { validarToken } from "../../utils/fn.js";

// import Spinner from "../../components/Spinner/indexSpinner.jsx";

const Home = lazy(() => import("../Home/indexHome"));

// const Login = lazy(() => import("../Login/indexLogin"));
// const Dashboard = lazy(() => import("../Dashboard/indexDashboard"));
// const GerarAvisos = lazy(() => import("../GeradorAvisos/indexGeradorAvisos"));

function MainRoutes({ match }) {
  //   const dispatch = useDispatch();
  return (
    <Suspense fallback={<div> Oláaaaa </div>}>
      <Routes>
        <Route path={`${match.path}`} element={<Home />} />
        {/* <Route
          path={`${match.path}dashboard`}
          exact
          render={() => (validarToken() ? <Dashboard /> : <Login />)}
        />
        <Route
          path={`${match.path}logout`}
          exact
          render={() => {
            dispatch({ type: "RESET_REDUX" });
            localStorage.removeItem("@INPERA:adm");
            return <Redirect to="/" />;
          }}
        />
        <Route
          path={`${match.path}gerarAvisos`}
          exact
          render={() => (validarToken() ? <GerarAvisos /> : <Login />)}
        /> */}
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
