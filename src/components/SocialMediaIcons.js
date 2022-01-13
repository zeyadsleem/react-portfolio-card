import React from "react";
import githubIcon from "../images/sochial-icons/github.svg";
import twitterIcon from "../images/sochial-icons/twitter.svg";
// import facebookIcon from "../images/sochial-icons/facebook.svg";
// import instagramIcon from "../images/sochial-icons/instagram.svg";

export default function SocialMediaIcons(props) {
  const icons = [githubIcon, twitterIcon];
  const { github, twitter } = props;

  return (
    <div>
      <ul className="social__icons__list">
        <li key={icons.slice(14, 20)} className="social--icon">
          <a href={github}>
            <img src={githubIcon} alt="social icon" />
          </a>
        </li>
        <li key={icons.slice(14, 20)} className="social--icon">
          <a href={twitter}>
            <img src={twitterIcon} alt="social icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
