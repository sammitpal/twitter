import { Avatar, Button } from '@material-ui/core'
import React, {useState} from 'react'
import './MessageSender.css'
import {useStateValue} from './StateProvider';
import {db} from './firebase'
import firebase from 'firebase';
function MessageSender() {
    const [{user}] = useStateValue();
    const [input, setInput] = useState("");
    const handleInput = (e) =>{
        if(input){
        db.collection('tweets').add({
            username: user.displayName,
            tweet: input,
            twittername: user.displayName.split(" ").join("").toLowerCase(),
            photo: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
        setInput("");
    }
    return (
        <div className="messagesender">
            <form>
            <div className="messagesender_input">
            <Avatar src={user.photoURL}/>
            <input type="text" placeholder="What's happening?" value={input} onChange={(e)=> setInput(e.target.value)}/>
            </div>
            <Button className="messagesender_tweet" onClick={handleInput}>Tweet</Button>
            </form>
        </div>
    )
}

export default MessageSender
