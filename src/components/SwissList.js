import React, {useEffect} from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import {data} from "./content/SwissListContent"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import getMedia from 'utils/getMedia' ;
gsap.registerPlugin(ScrollTrigger)

const SwissList = () => {
  const {bodyData} = data

 useEffect(() => {
  setTimeout(()=> {
    const triggerItem = document.querySelector('.swissWrapper');
    console.log('triggerItem :',triggerItem)
     const tl = gsap.timeline({
       paused: true, 
       scrollTrigger: {
          trigger: '.swissWrapper',
          start: 'top 50%',
          end: 'bottom+=300',
          toggleActions: "play pause play reset",
       }
     })
  
  
     .from(".lineLoader", {
       scaleX: 0,
       duration: 0.5,
       transformOrigin: "left center",
       ease: "none",
       stagger: 0.5,
     })
      .to(
        ".bodyDiv",{xPercent: 0, duration: 0.4, stagger: 0.4,
        },"<+=.2")
    .fromTo(
       ".textBody",
       {
         opacity: 0,
       },
       {
         opacity: 1,
         duration: 1,
         stagger: 0.5,
       },
       '<'
     )
  })
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
      <SectionOne >
      <HeaderStickyDiv >  
      <Header>{data.header}</Header>
      </HeaderStickyDiv>
      </SectionOne>
      
      <BodySectionWrapper>{RunBodyData}</BodySectionWrapper>
    </Wrapper>

  )
}

export default SwissList
const LoadingLine = styled.div`
  position: relative;
  display: inline-block;
  background-color: #191d1e;
  width: 100%;
  max-width: 55.556vw;
  height: 0.05em;
  margin: 0 0 0.694vw 0;
  border-radius: 3.472vw;
  ${media.fullWidth} {
    max-width: 800px;
    height: .06em;
    margin: 0 0 10px 0;
    border-radius: 50px;
  }

  ${media.tablet} {
    height: 0.09em;
  }

  ${media.mobile} {
    height: 0.05em;
  }
`
const BodyP = styled.p`
  ${text.bodyM}
  margin:unset;
  color: black;

  
  ${media.tablet} {
   ${text.bodyS}
  }
  
  ${media.mobile} {
  ${text.bodyS}
  }
`
const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow:hidden;
  width: 18.2vw;
  padding:  0.972vw 3.194vw 1.944vw 0vw;
  ${media.fullWidth} {
    width: 262px;
    padding: 14px 46px 28px 0px;
  }

  ${media.tablet} {
  width:20.895vw;
    padding: 1.679vw 2.516vw 3.357vw 0vw;
  }

  ${media.mobile} {
    width:46vw;
    padding:2.133vw 4.8vw 5.333vw 0vw;
  }
`
const BodySectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 64.288vw;
  ${media.fullWidth} {
    width: 786px;
  }

  ${media.tablet} {
    width:110.625vw;
  }

  ${media.mobile} {
    width:93.267vw;
  }
`
const Header = styled.h3`
  ${text.h3}
  margin:unset;
  color: black;

`
const HeaderStickyDiv = styled.div`
position: sticky;
top: 1.389vw;
display: flex;
height: fit-content;
${media.fullWidth} {
  top: 20px;
}

${media.tablet} {
  top: 2.398vw;
}

${media.mobile} {
  top: 5.333vw; 
}
`
const SectionOne = styled.div`
position: relative;
top: 0px;

`
const Wrapper = styled.div`
position: relative;
   display: flex;
   flex-direction: row;
   justify-content: center;
   padding: 3.472vw 6.389vw 3.472vw 9.167vw;
   gap: 3.472vw;
  ${media.fullWidth} {
    padding: 50px 92px 50px 132px;
    gap: 50px;
  }

  ${media.tablet} {
    padding: 4.796vw 3.118vw 4.796vw 4.796vw;
    gap:3.837vw;
  }
  ${media.mobile} {
    flex-direction:column;
    padding:0vw 6.933vw;
    gap:6.4vw;
    flex-wrap: nowrap;
    margin-top:5.333vw;
  }
`