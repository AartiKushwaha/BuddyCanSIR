import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Guide() {
  return (
    <>
      <Navigation />
      <div className="guide-div" style={{margin: "120px"}}>
      <center>
        <h1 className="mission-heading">Guide</h1>
      <iframe width="760" height="415" src="https://www.youtube.com/embed/x3tETfGANaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 style={{margin: "80px 0"}} className="mission-heading">Workflow of the website</h1>
      <a href="https://ibb.co/2PKt8zG"><img src="https://i.ibb.co/DkKCGB0/workflow.png" alt="workflow" border="0" /></a>
      </center>
      </div>
      <Footer />
    </>
  );
}
