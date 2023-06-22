import {Route, Routes, BrowserRouter} from "react-router-dom";
import routes from "./routes";
import store from "./features/store";
import {Provider} from "react-redux";
import {Toaster} from "react-hot-toast";
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
      <Toaster />
    </Provider>
  );
}

export default App;
