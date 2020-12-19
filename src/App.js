import "./App.css";
import Body from "./Body";
import Login from "./Login";
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";
import {useStateValue} from './StateProvider'
import {useEffect} from 'react'
import {auth} from './firebase'
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("USER ->", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
    return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Body />
          <RightBar />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
