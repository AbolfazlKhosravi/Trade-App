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
import DailyAnalyse from "./pages/DailyAnalyse";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFountPage";
import CheckOut from "./pages/CheckOut";
import Profile from "./pages/Profile";

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
  {path:"/sign-up" ,element:<SignUp/>},
  {path:"/login" ,element:<Login/>},
  {path:"/check-out" ,element:<CheckOut/>},
  {path:"/dilyAnalysis/:name" ,element:<DailyAnalyse/>},
  {path:"/user/:name" ,element:<Profile/>},
  {path:"*", element:<NotFoundPage/>},
]

export default routes;