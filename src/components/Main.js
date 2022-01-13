import React from "react";

import Button from "./Button";

export default function Main() {
  return (
    <div className="main">
      {/* top Title */}
      <div className="title">
        <h1 className="name">Zeyad Sleem</h1>
        <p className="job-title">Frontend Developer</p>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <Button buttonType="linkedin" />
        <Button buttonType="reseme" />
      </div>

      {/* Test aria */}
      <div className="text-eria about">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="text-eria interests">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
