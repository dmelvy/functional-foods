import React from "react";
import "./Footer.css";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function Footer() {
  return (
    <div>
      <span classsName="woke">Get more people food woke!</span>
      <EmailShareButton
        subject={`Let's make smarter lunch choices!`}
        body={`Hey, have you heard about this amazing new food app? I bet it'll change your next lunch choice. Go here to check it out:`}
        url={"functional-foods.netlify.app"}
        separator={" "}
        className={"socialMediaButton"}
      >
        <EmailIcon size={36} />
      </EmailShareButton>
      <FacebookShareButton
        url={"functional-foods.netlify.app"}
        quote={
          "Hey everyone, check out this awesome food app! You'll never look at lunch the same again."
        }
        hashtag="#GoodFood"
        className={"socialMediaButton"}
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <TwitterShareButton
        url={"functional-foods.netlify.app"}
        title={
          "Hey friends, check out this awesome food app! You'll never look at lunch the same again."
        }
        hashtag="#GoodFood"
        className={"socialMediaButton"}
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={"functional-foods.netlify.app"}
        title={
          "Hey, check out this awesome food app! You'll never look at lunch the same again."
        }
        separator=":: "
        className={"socialMediaButton"}
      >
        <WhatsappIcon size={36} />
      </WhatsappShareButton>
    </div>
  );
}
