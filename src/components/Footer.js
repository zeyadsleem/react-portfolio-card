import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Urls = {
  github: "https:github.com/zeyadsleem",
  twitter: "https:twitter.com/zeyadsleem",
  // facecbook: "https:facecbook.com/zeyadsleem",
};

export default function Footer() {
  return (
    <div className="footer">
      <SocialMediaIcons
        github={Urls.github}
        twitter={Urls.twitter}
        // facecbook={Urls.facecbook}
      />
    </div>
  );
}
