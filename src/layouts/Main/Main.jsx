import Footer from "../../components/Shared/Footer/Footer";
import NavigationBar from "../../components/Shared/Navigationbar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
