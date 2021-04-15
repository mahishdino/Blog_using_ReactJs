import React, { useEffect, useState } from "react";
import Card from "../UI/Cards";
import "./style.css";
import blogpost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
import Soicon from "../sociicon";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogpost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="sidebarcontainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardheader">
          <span>About Us</span>
        </div>
        <div className="profileimagecont">
          <img
            src={require("../../blogimg/md.jpg").default}
            alt="Profile Image"
          />
        </div>
        <div className="cardbody">
          <p className="personalbio">
            My name is mahish dino and im ultimate guy
          </p>
        </div>
      </Card>
      <Card>
        <div className="cardheader">
          <Soicon />
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardheader">
          <span>Recent Posts</span>
        </div>
        <div className="recentposts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/posts/${post.id}`}>
                <div className="recentpost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
