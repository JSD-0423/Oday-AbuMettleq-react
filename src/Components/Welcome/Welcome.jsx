import React, { useEffect } from "react";
import {
  StyledWelcome,
  StyledGradiant,
  StyledWelcomeContent,
  StyledWelcomeTitle,
  StyledWelcomeSubTitle,
  StyledTriangle,
} from "./Welcome.styles";

export function Welcome({ title, subTitle }) {
  useEffect(()=>{
    console.log("OnMount");
    return ()=>{
      console.log("on unMount")
    }
  },[])
  return (
    <StyledWelcome>
      <StyledGradiant>
        <StyledTriangle
          top="-3rem"
          zIndex="1"
          skewY="3"
          height="5rem"
          background="linear-gradient(90deg, rgba(7, 104, 160, 1) 0%, rgba(3, 193, 128, 1) 46%)"
        />
        <StyledTriangle
          top="-11rem"
          zIndex="2"
          skewY="-3"
          height="8rem"
          background="linear-gradient(90deg, rgba(7, 104, 160, 1) 0%, rgba(6, 123, 153, 1) 24%, rgba(3, 193, 128, 1) 100%)"
        />
      </StyledGradiant>
      <StyledWelcomeContent>
        <StyledWelcomeTitle>{title}</StyledWelcomeTitle>
        <StyledWelcomeSubTitle>{subTitle}</StyledWelcomeSubTitle>
      </StyledWelcomeContent>
    </StyledWelcome>
  );
}
