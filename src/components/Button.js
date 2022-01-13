import React from "react";
import linkedinIcon from "../images/button-icons/linkedin.svg";
import resemeIcon from "../images/button-icons/reseme.svg";

export default function Button(props) {
  const { buttonType } = props;

  if (buttonType === "linkedin") {
    return (
      <a href="https://linkedin.com/in/zeyad-sleem" target={`_blank`}>
        <div className="button rigth__button">
          <img
            src={linkedinIcon}
            alt=""
            className="button--logo"
          />
          <p> LinkedIn </p>
        </div>
      </a>
    );
  }

  return (
    <a href="https://reseme.com" target={`_blank`}>
      <div className="button left__button">
        <img src={resemeIcon} alt="" className="button--logo " />
        <p> Reseme </p>
      </div>
    </a>
  );
}
