import React from "react";
import { github_Link, linkedin_Link, twitter_Link } from "../../constants";

function ContactComponent() {
  return (
    <>
      <div className="flex mt-8">
        <a href={twitter_Link} className="rounded-lg bg-protfolio-blue">
          Twitter
        </a>
        <a href={github_Link} className="ml-4 rounded-lg bg-protfolio-green">
          GitHub
        </a>
        <a href={linkedin_Link} className="ml-4 rounded-lg bg-protfolio-pink">
          LinkedIn
        </a>
      </div>
    </>
  );
}

export default ContactComponent;
