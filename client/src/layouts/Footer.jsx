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
        url={''}
        separator={' '}
        className={'socialMediaButton'}
      >
        <EmailIcon size={36} />
        </EmailShareButton>
      <FacebookShareButton
     url={"http://www.camperstribe.com"}
     quote={"CampersTribe - World is yours to explore"}
     hashtag="#camperstribe"
     className={'socialMediaButton'}
   >
     <FacebookIcon size={36} />
   </FacebookShareButton>
   <TwitterShareButton
     url={"http://www.camperstribe.com"}
     title={"CampersTribe - World is yours to explore"}
     hashtag="#camperstribe"
     className={'socialMediaButton'}
   >
     <TwitterIcon size={36} />
   </TwitterShareButton>
   <WhatsappShareButton
     url={"http://www.camperstribe.com"}
     title={"CampersTribe - World is yours to explore"}
     separator=":: "
     className={'socialMediaButton'}
   >
     <WhatsappIcon size={36} />
   </WhatsappShareButton>
    </div>
  )
}
