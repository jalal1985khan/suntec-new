import React from "react";
import {FacebookShareButton, FacebookIcon} from "react-share";
       
export default function SocialMediaButtons(props) {
       return (
             <FacebookShareButton 
                url={post['slug']}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                >
                 <FacebookIcon size={36} />
              </FacebookShareButton>
       );
}