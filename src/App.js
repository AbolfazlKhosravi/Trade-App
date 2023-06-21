import {Route, Routes, BrowserRouter} from "react-router-dom";
import routes from "./routes";
import store from "./features/store";
import {Provider} from "react-redux";
import { Toaster } from 'react-hot-toast';
import { ScrollLink } from "react-scroll";
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
      <Toaster />
      <ScrollLink />
    </Provider>
  );
}

export default App;
