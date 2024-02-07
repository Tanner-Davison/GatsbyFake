import React, {useState, useEffect} from "react"
import styled from "styled-components"
import colors from "styles/colors"
import media from "styles/media"
import text from "styles/text"
import CenteredImgLarge from "../images/CenteredImgLarge.webp"
import CenteredImgMobile from "../images/CenteredImgMobile.webp"
import CenteredImgTablet from "../images/CenteredImgTablet.webp"
import useMedia from "../utils/useMedia"
import {content} from "./content/simpleCenteredContent"
import commonArrowLink from "./svg Assets/commonArrowLink.svg"
import commonArrowOrange from "./svg Assets/commonArrowOrange.svg"
import {gsap} from "gsap"

const SimpleCentered = () => {
  const [withImage, setWithImage] = useState(null)
  const [statisticCards, setStatisticCards] = useState(null)
  const [shouldScroll, setShouldScroll] = useState(false)
  const currentImg = useMedia(
    CenteredImgLarge,
    CenteredImgLarge,
    CenteredImgTablet,
    CenteredImgMobile
  )

  const scrollToButtons = () => {
    const elementToScroll = document.getElementById("bgBlack")

    elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    })
  }

  const handleClick = layout => {
    if (layout === "text") {
      setWithImage(false)
      setStatisticCards(false)
    } else if (layout === "img") {
      setStatisticCards(false)
      setWithImage(true)
    } else if (layout === "stats") {
      setWithImage(false)
      setStatisticCards(true)
    }
    setShouldScroll(true)
  }

  const handleMouseMove = event => {
    const mouseX = event.clientX
    const parentContainer = document.getElementById("bgBlack").parentNode
    const background = document.getElementById("bgBlack")
    const backgroundCenterX = background.offsetWidth / 2
    const maxAllowedX = parentContainer.offsetWidth - background.offsetWidth
    const constrainedX = Math.min(
      Math.max(
        backgroundCenterX,
        mouseX - parentContainer.getBoundingClientRect().left
      ),
      maxAllowedX + backgroundCenterX
    )
    gsap.to("#bgBlack", {x: constrainedX - backgroundCenterX})
  }

  const handleMouseLeave = () => {
    gsap.to("#bgBlack", {x: 50})
  }

  const statCards = content.stats.options.map((card, index) => {
    return (
      <Card key={index}>
        <CustomNumber>{card.percentage}</CustomNumber>
        <StatCardBody>{card.statBody}</StatCardBody>
        <StatsLink>{card.statLinkText}</StatsLink>
      </Card>
    )
  })
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to("#bgBlack", {x: 50})

    if (shouldScroll) {
      scrollToButtons()
      setShouldScroll(false)
    }
  }, [withImage, statisticCards, shouldScroll])

  return (
    <Wrapper>
      <HeaderDiv>
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <Headline>{content.headline}</Headline>
      </HeaderDiv>
      <BodyDiv>
        <Body>{content.body}</Body>
        <Link
          color={!statisticCards ? `${colors.primaryOrange}` : "#838587"}
          $fill={!statisticCards}>
          {content.link}
        </Link>
      </BodyDiv>
      {withImage && <Image src={currentImg} />}
      {statisticCards && <StatsWrapperDiv>{statCards}</StatsWrapperDiv>}
      <ClickableWrapper
        onMouseMove={e => handleMouseMove(e)}
        onMouseLeave={e => handleMouseLeave(e)}>
        <Controller>
          <Button
            $active={!withImage ? !statisticCards : undefined}
            onClick={() => handleClick("text")}>
            Text Only
          </Button>
          <Button $active={withImage} onClick={() => handleClick("img")}>
            Centered Img
          </Button>
          <Button $active={statisticCards} onClick={() => handleClick("stats")}>
            Centered Stats
          </Button>
        </Controller>
        <Background id={"bgBlack"} />
      </ClickableWrapper>
    </Wrapper>
  )
}
export default SimpleCentered
const StatsLink = styled.a`
  ${text.bodyMBold};
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryOrange};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
  &:after {
    content: url(${commonArrowOrange});
    display: inline-block;
    margin-left: 5px;
    width: 6.5px;
    height: 10px;
  }
`
const StatCardBody = styled.p`
  ${text.bodyM}
  margin:unset;
  margin-bottom: 1.389vw;
`
const CustomNumber = styled.p`
  font-family: Orbitron;
  font-style: normal;
  margin: unset;
  color: ${colors.primaryOrange};
  font-size: 3.333vw;
  font-weight: 500;
  line-height: 3.333vw;
  margin-bottom: 1.667vw;

  ${media.fullWidth} {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 24px;
  }
  ${media.tablet} {
    font-size: 4.688vw;
    line-height: 4.688vw;
  }
  ${media.mobile} {
    font-family: Orbitron;
    font-size: 9.813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 9.813vw;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24.583vw;
  ${media.fullWidth} {
    width: 354px;
  }

  ${media.tablet} {
    width: 29.297vw;
  }

  ${media.mobile} {
    width: 87.85vw;
  }
`
const StatsWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.847vw;
  ${media.fullWidth} {
    gap: 41px;
  }
  ${media.tablet} {
    gap: 4.004vw;
  }
  ${media.mobile} {
    flex-direction: column;
    gap: 7.477vw;
  }
`
const Image = styled.img`
  width: 63.333vw;
  max-height: 35.556vw;
  min-height: 13.889vw;
  ${media.fullWidth} {
    width: 912px;
    max-height: 512px;
    min-height: 200px;
  }

  ${media.tablet} {
    width: 89.063vw;
    height: 43.848vw;
    max-height: 50vw;
    min-height: 19.531vw;
  }

  ${media.mobile} {
    flex-direction: column;
    width: 87.85vw;
    width: 87.85vw;
    height: 47.664vw;
    max-height: 49.299vw;
    min-height: 10.514vw;
  }
`
const Link = styled.a`
  ${text.bodyMBold};
  cursor: pointer;
  color: ${props => props.color};
  text-decoration: none;
  margin: unset;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
  &:after {
    content: ${props =>
      props.$fill ? `url(${commonArrowOrange})` : `url(${commonArrowLink})`};
    display: inline-block;
    width: 6.5px;
    height: 10px;
    margin-left: 5px;
  }
`
const Body = styled.p`
  ${text.bodyM};
  margin: unset;
  max-width: unset;
`
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.389vw;
  width: 63.333vw;

  ${media.fullWidth} {
    gap: 20px;
    width: 912px;
  }

  ${media.tablet} {
    width: 80.469vw;
  }

  ${media.mobile} {
    width: 87.85vw;
  }
`
const Headline = styled.h2`
  ${text.h2};
  margin: unset;
`
const Eyebrow = styled.p`
  ${text.eyebrow};
  margin: unset;
`
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 1.667vw;
  ${media.fullWidth} {
    gap: 24px;
  }
  ${media.tablet} {
    width: 92.188vw;
  }
`
const Button = styled.button`
  position: relative;
  ${text.bodyMBold};
  cursor: pointer;
  border: none;
  background-color: ${props =>
    props.$active ? `${colors.primaryOrange}` : `${colors.white}`};
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
const Background = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  align-self: center;
  right: 0;
  left: 0;
  background-color: ${colors.black};
  width: 18.889vw;
  height: 125%;
  padding: 15px 0px;
  border-radius: 11px;
  z-index: 2;
`
const Controller = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${colors.mediumPurplGradient};
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
  align-items: center;
  box-sizing: border-box;
  z-index: 2;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 5.556vw;
  gap: 2.778vw;
  z-index: 1;
  ${media.fullWidth} {
    padding-bottom: 80px;
    gap: 40px;
  }

  ${media.tablet} {
    padding-bottom: 5.859vw;
    gap: 3.906vw;
  }

  ${media.mobile} {
    gap: 9.346vw;
    padding: 9.346vw 9.346vw 9.346vw 9.346vw;
  }
`

