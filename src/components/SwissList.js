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
  console.log(bodyData)

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

   // Animation for the loader with ScrollTrigger
   tl.from(".lineLoader", {
     scaleX: 0,
     duration: 0.8,
     transformOrigin: "left center",
     ease: "none",
     stagger: 0.8,
     scrollTrigger: {
       trigger: ".lineLoader",
     },
   })

   // Animation for the body with ScrollTrigger
   tl.fromTo(
     ".textBody",
     {
       opacity: 0,
     },
     {
       opacity: 1,
       duration: 2,
       stagger: 0.8,
     
     }
   )

   // Trigger the timeline to play when the trigger element comes into view
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
      <BodyDiv>
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
  width: 100%;
  max-width: 55.556vw;
  height: 0.139vw;
  margin: 0 0 0.694vw 0;
  border-radius: 3.472vw;
  position: relative;
  display: inline-block;
  background-color: #191d1e;
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
`
const BodySectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 64.278vw;
`
const Header = styled.h3`
  ${text.h3}
  margin:unset;
  color: black;
`
const Wrapper = styled.div`
  display: flex;
  padding: 3.472vw 6.389vw 3.472vw 9.167vw;
  gap: 3.472vw;

  box-sizing: border-box;
`
