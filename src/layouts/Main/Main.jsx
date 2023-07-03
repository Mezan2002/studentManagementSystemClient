import Footer from "../../components/Shared/Footer/Footer";
import NavigationBar from "../../components/Shared/Navigationbar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="min-h-screen">
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
