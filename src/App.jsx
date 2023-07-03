import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PrimaryRoute";
import "./App.css";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
