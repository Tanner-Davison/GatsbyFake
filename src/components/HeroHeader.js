import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { specifiedData } from "./content/heroContent"
import useMedia from "../utils/useMedia"
import { gsap } from "gsap"
const HeroHeader = () => {
  const [pageData, setPageData] = useState()
  const [currentFocus, setCurrentFocus] = useState(1)
  const options = { 1: "withVideo", 2: "simpleImg", 3: "withIcon" }

  const backgroundImg = useMedia(
    pageData?.videoOverlay?.desktop,
    pageData?.videoOverlay?.desktop,
    pageData?.videoOverlay?.tablet,
    pageData?.videoOverlay?.mobile
  );
  const imageToUse = useMedia(
    pageData?.images?.desktop,
    pageData?.images?.desktop,
    pageData?.images?.tablet,
    pageData?.images?.mobile
  );
const handleMouseMove = event => {
  const mouseX = event.clientX
  const parentContainer = document.getElementById("bgBlackHero").parentNode
  const background = document.getElementById("bgBlackHero")
  const backgroundCenterX = background.offsetWidth / 2
  const maxAllowedX = parentContainer.offsetWidth - background.offsetWidth
  const constrainedX = Math.min(
    Math.max(
      backgroundCenterX,
      mouseX - parentContainer.getBoundingClientRect().left
    ),
    maxAllowedX + backgroundCenterX
  )
  gsap.to("#bgBlackHero", { x: constrainedX - backgroundCenterX })
}

const handleMouseLeave = () => {
  gsap.to("#bgBlackHero", { x: 50 })
}
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to("#bgBlackHero", { x: 59 })
    let dataIncoming = specifiedData(options[currentFocus])
    setPageData(dataIncoming)
    console.log(pageData)
  }, [pageData,currentFocus])

  return (
    pageData && (
      <>
        <Wrapper $bgimg={pageData.id === "simpleImg" ? imageToUse : ""}>
          <ContentDiv>
            <MainContent>
              <Header>{pageData.headline}</Header>
              <Body>{pageData.body}</Body>
              <DemoButton>
                <ButtonText>{pageData.linkText}</ButtonText>
              </DemoButton>
            </MainContent>
            <ImageContainer>
              {pageData.id === "withVideo" && (
                <ImageAbsolute $imgsrc={imageToUse} />
              )}

              {pageData.id === "withVideo" && (
                <ContentImg
                  src={backgroundImg}
                  icon={pageData.id === "withIcon"}
                  alt={backgroundImg}
                />
              )}
              {pageData.id === "withIcon" && (
                <ContentImg
                  src={imageToUse}
                  $icon={pageData.id === "withIcon"}
                  alt={backgroundImg}
                />
              )}
            </ImageContainer>
          </ContentDiv>
        </Wrapper>
        <ClickableWrapper
          onMouseMove={e => handleMouseMove(e)}
          onMouseLeave={e => handleMouseLeave(e)}
        >
          <Controller>
            <Button $active={""} onClick={() => setCurrentFocus(1)}>
              W/ Video
            </Button>
            <Button onClick={() => setCurrentFocus(2)}>Background Image</Button>
            <Button onClick={() => setCurrentFocus(3)}>With Icon</Button>
          </Controller>
          <Background id={"bgBlackHero"} />
        </ClickableWrapper>
      </>
    )
  )
}

export default HeroHeader
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateX(0);
  }
  50%{
    transform: rotate(0deg) translateX(-1.336vw) translateY(-1.336vw)
  }
  100% {
    transform: rotate(0deg) translateX(0);
  }
`
const ImageAbsolute = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$imgsrc ? `url(${props.$imgsrc})` : `unset`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  width: 42.847vw;
  height: 31.583vw;
  z-index: 1;
  animation: ${rotateAnimation} 4s infinite ease-in-out;
  ${media.fullWidth} {
    width: 617px;
    height: 445px;
  }

  ${media.tablet} {
    background-size: contain;
    width: 50.488vw;
    height: 42.871vw;
  }

  ${media.mobile} {
    width: 105.841vw;
    height: 73.131vw;
  }
`

const ContentImg = styled.img`
  position: relative;
  width: ${props => (props.$icon ? "33.958vw" : "34.722vw")};
  height: ${props => (props.$icon ? "33.958vw" : "19.514vw")};
  z-index: 3;
  ${media.fullWidth} {
    width: ${props => (props.$icon ? "489px" : "500px")};
    height: ${props => (props.$icon ? "489px" : "281px")};
  }

  ${media.tablet} {
    width: ${props => (props.$icon ? "47.754vw" : "40.313vw")};
    height: ${props => (props.$icon ? "47.754vw" : "23.441vw")};
  }

  ${media.mobile} {
    width: ${props => (props.$icon ? "87.85vw" : "87.85vw")};
    height: ${props => (props.$icon ? "87.85vw" : "53.271vw")};
  }
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  width: 42.847vw;
  height: 29.583vw;
  z-index: 1;
  ${media.fullWidth} {
    width: 617px;
    height: 426px;
    z-index: 1;
  }

  ${media.tablet} {
    width: 70.25399999999999vw;
    height: 41.602vw;
  }

  ${media.mobile} {
    width: 87.85vw;
    height: 87.85vw;
  }
`
const ButtonText = styled.p`
  cursor: pointer;
  ${text.bodyMBold}
  margin: unset;
  background-color: ${colors.primaryOrange};
  color: #fff;
  padding: 0.625vw 1.875vw;
  border-radius: 1.944vw;
  ${media.fullWidth} {
    padding: 9px 27px;
    border-radius: 28px;
  }

  ${media.tablet} {
    padding: 0.879vw 2.637vw;
    border-radius: 2.734vw;
  }

  ${media.mobile} {
    padding: 2.103vw 6.308vw;
    border-radius: 6.542vw;
  }
`
const DemoButton = styled.div`
  display: inline-flex;
  width: max-content;
`
const Body = styled.p`
  ${text.bodyL}
  margin:unset;
  ${media.mobile} {
    ${text.bodyL}
  }
`
const Header = styled.h1`
  ${text.h1}
  ${media.mobile} {
    ${text.h1Mobile}
  }
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow: hidden;
  gap: 2.778vw;
  ${media.fullWidth} {
    gap: 40px;
  }

  ${media.tablet} {
    gap: 3.906vw;
  }

  ${media.mobile} {
    gap: 7.477vw;
  }
`
const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.556vw;
  ${media.fullWidth} {
    gap: 80px;
  }

  ${media.tablet} {
    gap: 3.906vw;
  }

  ${media.mobile} {
    flex-direction: column-reverse;
    gap: 1.869vw;
  }
`
const Background = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  align-self: center;
  right: 0;
  left: 0;
  background-image: ${colors.greyGradient};
  width: 18.889vw;
  height: 125%;
  padding: 15px 0px;
  border-radius: 11px;
  z-index: 2;
  ${media.fullWidth} {
    width: 272px;
  }

  ${media.tablet} {
    width: 27.037vw;
  }

  ${media.mobile} {
    width: 38.037vw;
  }
`
const Button = styled.button`
  position: relative;
  ${text.bodyMBold};
  cursor: pointer;
  border: none;
  background-color: ${props => (props.$active ? `#FFFFFF` : `${colors.white}`)};
  color: ${props => (props.$active ? `${colors.white}` : `${colors.black}`)};
  width: max-content;
  border-radius: 0.672vw;
  padding: 0.347vw;
  border: 0.069vw groove black;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.9);
  }
  ${media.fullWidth} {
    border-radius: 10px;
    padding: 5px;
    border: 1px groove black;
    transition: transform 0.3s ease-in-out;
  }
  ${media.tablet} {
    border-radius: 1vw;
    padding: 0.557vw;
    border: 1px groove black;
  }
  ${media.mobile} {
    ${text.bodyXSBold}
    border-radius:1.636vw;
    padding: 0.557vw;
    border: 0.234vw groove black;
  }
`

const Controller = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${colors.darkPurpleGradient};
  background-position: center;
  border: 0.069vw groove black;
  gap: 1.389vw;
  border-radius: 0.672vw;
  padding: 1.042vw 1vw;
  z-index: 5;
  ${media.fullWidth} {
    border: 1px groove black;
    gap: 20px;
    border-radius: 20px;
    padding: 15px 14px;
  }

  ${media.tablet} {
    border: 0.234vw groove black;
    gap: 2.673vw;
    border-radius: 10px;
    padding: 1.701vw 1.636vw;
  }

  ${media.mobile} {
    border: 0.234vw groove black;
    gap: 2.673vw;
    border-radius: 10px;
    padding: 1.701vw 1.636vw;
  }
`
const ClickableWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0px auto;
  max-width: max-content;
  align-items: center;
  box-sizing: border-box;
  z-index: 2;
  ${media.tablet}{
    margin-bottom:5vw;
  }
  ${media.mobile}{
    margin-bottom:8.167vw;
  }
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgimg ? `url(${props.$bgimg})` : "unset"};
  background-size: ${props => (props.$bgimg ? "50.906vw 100%" : "unset")};
  background-repeat: no-repeat;
  background-position: top right;
  padding: 6.944vw 10.278vw;
  background-color: #f5f4f7;
  overflow: hidden;
  z-index: 0;
  ${media.fullWidth} {
    padding: 100px 148px;
    background-size: ${props => (props.$bgimg ? "733px 100%" : "unset")};
  }

  ${media.tablet} {
    padding: 3.906vw 5.859vw;
    
  }

  ${media.mobile} {
    padding: 14.019vw 6.075vw;
    background-size: ${props => (props.$bgimg ? "93.925vw 93.925vw" : "unset")};
    background-position: top right;
  }
`
