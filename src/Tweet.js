import { Avatar } from "@material-ui/core";
import {
  AutorenewOutlined,
  ChatBubbleOutline,
  Delete,
  FavoriteBorder,
  ShareOutlined,
} from "@material-ui/icons";
import React from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Tweet.css";
function Tweet({ username, photo, tweet, date, twittername, dtweet }) {
  const [{ user }] = useStateValue();
  return (
    <div className="tweet">
      <div className="tweet_header">
        <div className="tweet_header_left">
          <Avatar src={photo} />
          <div className="tweet_info">
            <h4>{username}</h4>
            <p>@{twittername}</p>
          </div>
          <p>{date}</p>
        </div>
        <div className="tweet_header_right">
          {user.displayName === username ? (
            <Delete className="tweet_delete"
              onClick={(event) =>
                db.collection("tweets").doc(dtweet.id).delete()}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="tweet_body">
        <p>{tweet}</p>
      </div>
      <div className="tweet_footer">
        <ChatBubbleOutline />
        <AutorenewOutlined />
        <FavoriteBorder />
        <ShareOutlined />
      </div>
    </div>
  );
}

export default Tweet;
