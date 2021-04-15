import React, { useState, useEffect } from "react";
import Card from "../UI/Cards";
import "./style.css";
import blogpost from "../../data/blog.json";
import Soicon from "../sociicon";

const Blogposts = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [postid, setPostid] = useState("");

  useEffect(() => {
    const postid = props.match.params.postid;
    const post = blogpost.data.find((post) => post.id == postid);
    setPost(post);
    setPostid(postid);
  }, [post, props.match.params.postid]);

  if (post.blogImage == "") return null;

  return (
    <div className="blogpostcontainer">
      <Card>
        <div className="blogheader">
          <span className="blogcategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedby">
            Posted On {post.postedOn}by Mahish Dino
          </span>
        </div>
        <div className="postimagecontainer">
          <img
            src={require(`../../blogimg/awa.jpg`).default}
            alt="Post Image"
          />
        </div>
        <div className="postcontent">
          <h3>{post.blogTitle}</h3>

          <p className="pp">{post.blogText}</p>
          <div className="mid">
            <Soicon />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Blogposts;
