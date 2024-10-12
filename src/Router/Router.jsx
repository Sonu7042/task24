import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import Payment from "../components/Payment";
import DisplayItems from "../components/DisplayItems";
import ShowSelectedItem from "../components/ShowSelectedItem";
import LeftDiv from "../components/LeftDiv";
import User from "../components/User";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<LeftDiv/>}>
      <Route  path="" element={ <DisplayItems/>}/>
      <Route  path="payment" element={ <Payment/>}/>
      

      
      

      </Route>
      
      
    </Route>
  )
);

export default router;
