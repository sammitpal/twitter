import { Search } from '@material-ui/icons'
import React from 'react'
import './RightBar.css'
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
  } from "react-twitter-embed"
  function RightBar() {
    return (
        <div className="rightbar">
            <div className="input">
            <Search/>
            <input type="text" placeholder="Search Twitter"/>
            </div>
            <TwitterTweetEmbed tweetId={"1339466141542932481"} />
            <TwitterTweetEmbed tweetId={"1339502551440355330"} />
            <TwitterTweetEmbed tweetId={"1339473562420166656"} />
            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TechnicalGuruji"
          options={{ height: 400 }}
        />
        </div>
    )
}

export default RightBar
