import React from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/sidebar";
import Card from "../../Components/UI/Cards";
import "./style.css";

const Home = (props) => {
  const galleryheight = 450;
  const gallerystyle = {
    height: galleryheight + "px",
    overflow: "hidden",
  };
  const sideimage = galleryheight / 3;
  return (
    <div>
      <Card>
        <div className="gallerypost" style={gallerystyle}>
          <section style={{ width: "70%" }}>
            <div>
              <img
                src={require("../../blogimg/space.jpg").default}
                alt="Popular Image"
              />
            </div>
          </section>
          <section className={"sideimagewrapper"} style={{ width: "30%" }}>
            <div style={{ height: `${sideimage}px` }}>
              <img
                src={require("../../blogimg/space.jpg").default}
                alt="Popular Image"
              />
            </div>

            <div style={{ height: `${sideimage}px` }}>
              <img
                src={require("../../blogimg/space.jpg").default}
                alt="Popular Image"
              />
            </div>

            <div style={{ height: `${sideimage}px` }}>
              <img
                src={require("../../blogimg/space.jpg").default}
                alt="Popular Image"
              />
            </div>
          </section>
        </div>
      </Card>

      <section className="Homec">
        <div style={{ width: "70%" }}>
          <Card style={{ marginBottom: "20px" }}>
            <div className="postimagewrapper">
              <img
                src={require("../../blogimg/space.jpg").default}
                alt="Popular Image"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <span>Featured</span>
              <h2>Fitness Mantra to live fit life</h2>
              <span>posted on 22 Jan 2021 by Mahish Dino</span>
              <p>
                Midst first it, you're multiply divided. There don't, second his
                one given the he one third rule fruit, very. Fill. Seed give
                firmament doesn't land, isn't lesser creeping. Abundantly you
                called signs waters yielding he cattle greater were evening.
                Sixth make moving the multiply dominion creature beast made
                subdue lights him. Green of lights in their first. It there
                winged called after upon him. Bring one was upon Life moving.
                Them beast first all lights place air creature. Green have, tree
                made. Won't sixth there meat us first, fruitful.
              </p>
              <button>Read More</button>
            </div>
          </Card>

          <Card style={{ marginBottom: "20px" }}>Post 2</Card>
        </div>
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
