import Hoom from "./pages/Hoom";
import AboutMe from "./pages/AboutMe";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Market from "./pages/Market";
import DailyAnalysis from "./pages/DailyAnalysis";
import Courses from "./pages/Courses";
import Store from "./pages/Store";
import Book from "./pages/Book";
import Course from "./pages/course";
const routes=[
  {path:"/" ,element:<Hoom/>},
  {path:"/aboutMe" ,element:<AboutMe/>},
  {path:"/cart" ,element:<Cart/>},
  {path:"/favorites" ,element:<Favorites/>},
  {path:"/market" ,element:<Market/>},
  {path:"/dilyAnalysis" ,element:<DailyAnalysis/>},
  {path:"/courses" ,element:<Courses/>},
  {path:"/store" ,element:<Store/>},
  {path:"/store/:name" ,element:<Book/>},
  {path:"/courses/:name" ,element:<Course/>},
]
export default routes;