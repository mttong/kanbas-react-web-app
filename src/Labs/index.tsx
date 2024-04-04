import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route, Navigate}
  from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";


function Labs() {
 return (
   <div>
     <Provider store={store}>
     <Nav/>
     <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>

        <Route path="a5"
        element={<Assignment5/>}/>
     </Routes>
     </Provider>
   </div>
 );
}
export default Labs;
 