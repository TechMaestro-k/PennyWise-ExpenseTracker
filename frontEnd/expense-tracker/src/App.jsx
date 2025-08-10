import React , { useState , Suspense} from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Login from './pages/auth/login'
import SignUp from './pages/auth/SignUp'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'

//doing lazy loading to make sure that small bundles get imported one at a time
// const Login =React.lazy(() => import("./pages/auth/login"))
// const SignUp = React.lazy(() => import("./pages/auth/SignUp"))
// const Home = React.lazy(() => import("./pages/Dashboard/Home"))
// const Income = React.lazy(() => import("./pages/Dashboard/Income"))
// const Expense = React.lazy(() => import("./pages/Dashboard/Expense"))



function App() {

  return (
    <div>
      <Router>
        {/* <Suspense fallback={<div className='text-3xl font-semibold text-slate-500 flex justify-center mt-30'>Loading....</div>} /> */}
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/dashboard" element={<Home/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/expense" element={<Expense/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () =>{
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />);
}