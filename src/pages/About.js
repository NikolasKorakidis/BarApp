import React from "react";
import "./styles/About.css";

function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <img
        alt="bars"
        src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/13907208_10154435554089530_2647055886669993342_n.jpg?_nc_cat=101&_nc_sid=a9b1d2&_nc_ohc=elnuqsMJbZ0AX8iP161&_nc_ht=scontent-amt2-1.xx&oh=6fe52f5329208f5a25d68aa0c51ce09b&oe=5F7C11BF"
      ></img>
      <p>
        This App is part of class 45s exercises, but also a very good way to
        figure out your Cocktails! Believe it or not the person who made this
        app was once a cocktail shaker so please dont hesitate to ask any
        questions about cocktails or about the App!
      </p>
    </div>
  );
}

export default About;
