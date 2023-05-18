import {Route, Routes, BrowserRouter} from "react-router-dom";
import routes from "./routes";
import store from "./features/store";
import {Provider} from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
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
    </Provider>
  );
}

export default App;
