import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Order from './Order';
import Home from './Home';
import { stateReducer, taskarr } from './Reducer';
import { stateContext } from './Context';
import Payment from './Payment';
import Pay from './Pay';
import Form from './Form';
// import Server from './Server';

 const Routesrender = ()=>{
  const [state, dispatch] = useReducer(stateReducer,taskarr);
return(
  <stateContext.Provider value={{state, dispatch}}>
  <BrowserRouter>{
      
        state?.islogin?<Routes>
        {/* <Route path='/' element={<Form1 />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='order' element={<Order />}></Route>
        <Route path='payment' element={<Payment />}></Route>
    <Route path='pay' element={<Pay/>}></Route>
        <Route path='*' element={<Navigate to ="/" />}></Route>
        
      </Routes>:<Routes>
        <Route path='/form' element={<Form />}></Route>
        <Route path='*' element={<Navigate to ="/form" />}></Route>

       
        
      </Routes>
       }

  
  {/* <Routes> */}
{/*       
    <Route path='/' element={<Home />}></Route>
    <Route path='order' element={<Order />}></Route>
    <Route path='payment' element={<Payment />}></Route>
    <Route path='pay' element={<Pay/>}></Route>
    <Route path='form1' element={<Form1/>}></Route>
    {/* <Route path='server' element={<Server/>}></Route> */}
    
  
    {/* </Routes> */} 
     
  </BrowserRouter>
  </stateContext.Provider>
)

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>

   <Routesrender />
 </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
