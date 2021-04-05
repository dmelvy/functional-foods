import React from 'react';
import './Footer.css';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

export default function Footer() {
  return (
    <div>
      Get more people food woke!
      <EmailShareButton
        subject={'Functional Foods'}
        body={`Hey, have you heard about this amazing new food app? I bet it'll change your next lunch choice.`}
        url={'functional-foods.netlify.app'}
        separator={' '}
        className={'socialMediaButton'}
      >
        <EmailIcon size={36} />
        </EmailShareButton>
      <FacebookShareButton
     url={"functional-foods.netlify.app"}
     quote={"The #1 Food For Thought App"}
     hashtag="#GoodFood"
     className={'socialMediaButton'}
   >
     <FacebookIcon size={36} />
   </FacebookShareButton>
   <TwitterShareButton
     url={"functional-foods.netlify.app"}
     title={"The #1 Food For Thought App"}
     hashtag="#GoodFood"
     className={'socialMediaButton'}
   >
     <TwitterIcon size={36} />
   </TwitterShareButton>
   <WhatsappShareButton
     url={"functional-foods.netlify.app"}
     title={"The #1 Food For Thought App"}
     separator=":: "
     className={'socialMediaButton'}
   >
     <WhatsappIcon size={36} />
   </WhatsappShareButton>
    </div>
  )
}
