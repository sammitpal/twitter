import { Avatar } from '@material-ui/core'
import { StarBorderOutlined } from '@material-ui/icons'
import React,{useEffect, useState} from 'react'
import './Body.css'
import { auth, db } from './firebase'
import MessageSender from './MessageSender'
import { useStateValue } from './StateProvider'
import Tweet from './Tweet'
function Body() {
    const [{user}] = useStateValue();
    const handleLogout = () =>{
        auth.signOut();
    }
    const [tweets, setTweets] = useState([]);
    useEffect(()=>{
        db.collection('tweets').orderBy('timestamp','desc').onSnapshot(snaphot => {
            setTweets(snaphot.docs.map(doc => ({id: doc.id ,data: doc.data()})));
        })
    },[])
    return (
        <div className="body">
            <div className="body_header">
                <h2>Home</h2>
                <StarBorderOutlined style={{color: '#1da1f1'}}/>
            </div>
            <MessageSender/>
            {
                tweets.map(tweet=>(
                    <Tweet username={tweet.data.username} photo={tweet.data.photo} tweet={tweet.data.tweet} date={new Date(tweet.data.timestamp?.toDate()).toLocaleDateString()} twittername={tweet.data.twittername} dtweet={tweet}/>
                ))
            }
            <div className="body_bottom" onClick={handleLogout}>
                <Avatar src={user.photoURL}/>
               <div className="body_bottom_info">
               <h4>{user.displayName}</h4>
                <p>@{user.displayName.split(" ").join("").toLowerCase()}</p>
               </div>
            </div>
        </div>
    )
}

export default Body
