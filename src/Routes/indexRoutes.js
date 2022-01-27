import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../Pages/Home/indexHome"));
const About = lazy(() => import("../Pages/About/indexAbout"));
const Contact = lazy(() => import("../Pages/Contact/indexContact"));

const Routesindex = () => {
  return (
    <Suspense fallback={<div> Oláaaaa </div>}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default Routesindex;
