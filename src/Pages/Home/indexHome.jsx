import React from "react";
import Menus from "../../Components/Menus/index.Menus";
import Footer from "../../Components/Footer/indexFooter";
import { getAllDataHome } from "../../store/Home/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const dataHome = useSelector((state) => state.reducerHome);

  React.useEffect(() => {
    dispatch(getAllDataHome());
  }, []);

  return (
    <div className="MainPageContainer">
      <Menus />
      <div className="bodyContainer">
        {dataHome && (
          <div className="post-content">
            <h1>{dataHome.name}</h1>
            <p>
              <strong>
                {dataHome.subtitle1}
                <span> {dataHome.technologies}</span>
              </strong>
              <br />
              {dataHome.subtitle2}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
