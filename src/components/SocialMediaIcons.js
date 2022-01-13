import React from "react";
import githubIcon from "../images/sochial-icons/github.svg";
import twitterIcon from "../images/sochial-icons/twitter.svg";
// import facebookIcon from "../images/sochial-icons/facebook.svg";
// import instagramIcon from "../images/sochial-icons/instagram.svg";

const github = "https://www.github.com/zeyadsleem";
const twitter = "https://www.twitter.com/zeyadsleem";

export default function SocialMediaIcons(props) {
  const icons = [githubIcon, twitterIcon];

  return (
    <div>
      <ul className="social__icons__list">
        <li key={icons[0].slice(14, 20)} className="social--icon">
          <a href={github} target={`_blank`}>
            <img src={githubIcon} alt="github icon" className="icon" />
          </a>
        </li>
        <li key={icons[1].slice(14, 21)} className="social--icon">
          <a href={twitter} target={`_blank`}>
            <img src={twitterIcon} alt="twitter icon" className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
