import Hoom from "./pages/Hoom";
import AboutMe from "./pages/AboutMe";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Market from "./pages/Market";
import DailyAnalysis from "./pages/DailyAnalysis";
const routes=[
  {path:"/" ,element:<Hoom/>},
  {path:"/aboutMe" ,element:<AboutMe/>},
  {path:"/cart" ,element:<Cart/>},
  {path:"/favorites" ,element:<Favorites/>},
  {path:"/market" ,element:<Market/>},
  {path:"/dilyAnalysis" ,element:<DailyAnalysis/>},
]
export default routes;