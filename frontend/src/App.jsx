
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton , useUser} from '@clerk/clerk-react'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx'
import {Toaster} from 'react-hot-toast'
import DashboardPage from './pages/DashboardPage.jsx'
import ProblemPage from './pages/ProblemPage.jsx'
import SessionPage from './pages/SessionPage.jsx'

function App() {
  const{isSignedIn , isLoaded} = useUser();

  if(!isLoaded) {
    return null;
  }
  return (
    <>
    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage/> : <Navigate to="/dashboard"/>}></Route>
      <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to="/"/>}></Route>
      <Route path="/problems" element={isSignedIn ? <ProblemsPage/> : <Navigate to="/"/>}></Route>
      <Route path="/problem/:id" element={isSignedIn ? <ProblemPage/> : <Navigate to="/"/>}></Route>
      <Route path="/session/:id" element={isSignedIn ? <SessionPage/> : <Navigate to="/"/>}></Route>

    </Routes>
    <Toaster toastOptions={{duration : 3000}}/>
    </>
  )
}

export default App
