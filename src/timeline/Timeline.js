import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://pyxis.nymag.com/v1/imgs/352/915/c93bd144c171c299447c16a26f80ff1f4a-21-pizza-rat.2x.rhorizontal.w710.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwl6vNNU5G8W9GjEMufAF5wdawF_uVNaq-uJUR9CGXmg&s",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage: "https://i.imgur.com/4ulSZkog.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://i.ytimg.com/vi/PEUIqiBAaQw/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCOhwNGY8AD6rJFgGi2dWPeay9Xfg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
