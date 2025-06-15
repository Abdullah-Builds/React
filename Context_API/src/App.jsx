import  Login  from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
     <h1 className="text-8xl text-center font-bold pt-16" >Khan </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
