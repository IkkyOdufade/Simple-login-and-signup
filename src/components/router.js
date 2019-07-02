import React from 'react'
import Login from '../auth/login'
import Register from '../auth/Register'
import { BrowserRouter as Router, Route} from "react-router-dom";


export default function CustomRouter() {
    return (
        <div>
          <Router>
              
              <Route path = '/login/' component={Login}></Route>
              <Route path = '/Register/' component={Register}></Route>
              </Router>  
        </div>
    )
}
