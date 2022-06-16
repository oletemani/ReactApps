import './App.css';
import Navbar from './Navbar/Navbar';
import Message from './Message/Message';
import Product from './Product/Product';
import User from './User/User';
import Login from './Login';
import {Provider} from 'react-redux'
import { store } from './Redux/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return( 
  <div>
     <Provider store = {store}>
      <Router>
      <Navbar />
      <Routes>
                          <Route path="/message" element={<Message />} />
                          <Route path="/product" element={<Product />} />
                          <Route path="/user" element={<User />} />
                          <Route path="/login" element={<Login />} />

                      </Routes>
    
    </Router>
</Provider>
  </div>
  )
}

export default App;
