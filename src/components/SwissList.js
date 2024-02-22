import React, {useEffect} from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import {data} from "./content/SwissListContent"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollSmoother} from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const SwissList = () => {
  const {bodyData} = data

 useEffect(() => {
  const triggerItem = document.querySelector('.swissWrapper')
   const tl = gsap.timeline({
     paused: true, 
     scrollTrigger: {
        trigger: triggerItem,
        start: "top top",
        end: '+=1000',
        toggleActions: "play pause play reset",
     }
   })
   tl.set('.bodyDiv',{
   xPercent:400
   })
   tl.from(".lineLoader", {
     scaleX: 0,
     duration: 0.4,
     transformOrigin: "left center",
     ease: "none",
     stagger: 0.4,
     scrollTrigger: {
       trigger: ".lineLoader",
     },
   })
    tl.to(
      ".bodyDiv",
      {
        xPercent: 0,
        duration: 0.4,
        stagger: 0.4,
      },
      "-=.2"
    )
   tl.fromTo(
     ".textBody",
     {
       opacity: 0,
     },
     {
       opacity: 1,
       duration: 2,
       stagger: 0.4,
     },
     '<'
   )
  
  //  ScrollTrigger.create({
  //    trigger: triggerItem, 
  //    onEnter: () => tl.play(),
  //    onLeave: () => tl.pause(),
  //    onEnterBack: () => tl.play(),
  //    onLeaveBack: () => tl.pause(),
  //  })
 }, [])
  const RunBodyData = bodyData.map((bodyItem, index) => {
    return (
      <BodyDiv className='bodyDiv'>
        <LoadingLine className="lineLoader" />
        <BodyP className="textBody">{bodyItem.body} </BodyP>
      </BodyDiv>
    )
  })
  return (
    <Wrapper className="swissWrapper">
      <Header>{data.header}</Header>
      <BodySectionWrapper>{RunBodyData}</BodySectionWrapper>
    </Wrapper>
  )
}

export default SwissList
const LoadingLine = styled.span`
  position: relative;
  display: inline-block;
  background-color: #191d1e;
  width: 100%;
  max-width: 55.556vw;
  height: 0.139vw;
  margin: 0 0 0.694vw 0;
  border-radius: 3.472vw;
  ${media.fullWidth} {
    max-width: 800px;
    height: 2px;
    margin: 0 0 10px 0;
    border-radius: 50px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const BodyP = styled.p`
  ${text.bodyM}
  margin:unset;
  color: black;
`
const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 18.194vw;
  padding: 0.972vw 3.194vw 1.944vw 0vw;
  ${media.fullWidth} {
    width: 262px;
    padding: 14px 46px 28px 0px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const BodySectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 64.278vw;
  ${media.fullWidth} {
    width: 786px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const Header = styled.h3`
  ${text.h3}
  margin:unset;
  color: black;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.472vw 6.389vw 3.472vw 9.167vw;
  gap: 3.472vw;

  box-sizing: border-box;
  ${media.fullWidth} {
    padding: 50px 92px 50px 132px;
    gap: 50px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
