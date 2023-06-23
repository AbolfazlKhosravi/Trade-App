import Hoom from "./pages/Hoom";
import AboutMe from "./pages/AboutMe";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
const routes=[
  {path:"/" ,element:<Hoom/>},
  {path:"/aboutMe" ,element:<AboutMe/>},
  {path:"/cart" ,element:<Cart/>},
  {path:"/favorites" ,element:<Favorites/>},
]
export default routes;