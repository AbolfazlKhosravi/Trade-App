import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <div className="2xl:container mx-auto  bg-red-500">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
