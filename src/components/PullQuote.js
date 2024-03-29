import React, { useEffect, useState } from "react"

import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { dummyData } from "./content/pullQuoteContent"
import CardBackgroundImg from "../images/CardBackgroundImg.webp"
import LargeQuoteBg from "../images/LargeQuoteBg.webp"
import LightThemeLogo from "../images/LightThemeLogo.webp"
import TabletBg from "../images/TabletBg.webp"
import TabletCardBg from "../images/TabletCardBg.webp"
import MobileLargeImg from "../images/MobileLargeImg.webp"
import MobileCardImg from "../images/MobileCardImg.webp"
import LogoRightMobile from "../images/LogoRightMobile.webp"

const PullQuote = () => {
  const [cardData, setLightData] = useState([])
  const [darktData, setDarkData] = useState([])
  const [cardActive, setCardActive] = useState("")
  const [isMobile, setIsMobile] = useState("")

  const contentToRender =
    isMobile <= 480 ? darktData.bodyMobile : darktData.body
  const cardContentToRender = isMobile ? cardData.bodyMobile : cardData.body

  useEffect(() => {
    dummyData.forEach(item => {
      if (item.theme === "dark") {
        setDarkData(item.data)
        item.cardActivated === true ? setCardActive(true) : setCardActive(false)
      } else {
        setLightData(item.data)
      }
    })
    setIsMobile(window.innerWidth <= 480)
  }, [darktData, cardData, cardActive])

  return (
    <Wrapper $cardactive={cardActive}>
      <PullQuoteWrapper $cardactive={cardActive}>
        <ContentWrapper $cardactive={cardActive}>
          <QuoteContent $cardactive={cardActive}>
            <StyledEyebrow>
              {cardActive ? cardData.eyebrow : darktData.eyebrow}
            </StyledEyebrow>
            {!cardActive && <BodyL>{contentToRender}</BodyL>}
            {cardActive && <Body>{cardContentToRender}</Body>}
            <BottomContent>
              <AuthorContent>
                {cardActive ? cardData.author : darktData.author}
              </AuthorContent>
              <Title>{cardActive ? cardData.title : darktData.title}</Title>
              {!cardActive && <Address>{darktData.address}</Address>}
            </BottomContent>
            {cardActive && <CTALink>See the Case Study {" >"} </CTALink>}
          </QuoteContent>
          {cardActive && (
            <SideImg
              src={media.mobile ? LogoRightMobile : LightThemeLogo}
              alt={"Aon Logo"}
            />
          )}
        </ContentWrapper>
      </PullQuoteWrapper>
    </Wrapper>
  )
}

export default PullQuote
const CTALink = styled.button`
  position: absolute;
  background: none;
  border: none;
  padding: unset;
  margin: unset;
  color: ${colors.primaryOrange};
  ${text.bodyMBold};
  bottom: -1.208vw;
  ${media.fullWidth} {
    bottom: -17px;
  }

  ${media.tablet} {
    bottom: 1px;
  }

  ${media.mobile} {
    bottom: -8.168vw;
  }
`
const SideImg = styled.img`
  width: 28.056vw;
  height: 22.778vw;
  ${media.fullWidth} {
    width: 404px;
    height: 328px;
  }

  ${media.tablet} {
    margin-top: 4.541vw;
    width: 39.453vw;
    height: 32.031vw;
  }

  ${media.mobile} {
    padding: 0vw 0vw 0vw 0vw;
    width: 87.85vw;
    height: 56.075vw;
  }
`
const Address = styled.p`
  ${text.bodyM};
  color: ${colors.white};
`
const Title = styled.p`
  ${text.bodyM};
  color: ${colors.white};
  margin: unset;
`
const AuthorContent = styled.p`
  ${text.bodyMBold};
  color: ${colors.white};
  margin: 0vw;
`
const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 6.944vw;
  ${media.fullWidth} {
    margin-top: 100px;
  }

  ${media.tablet} {
    margin-top: 6.944vw;
  }

  ${media.mobile} {
    margin-top: 14.019vw;
  }
`
const Body = styled.h3`
  ${text.h3};
  margin: unset;
  color: ${colors.white};
  text-indent: -0.39em;

  ${media.mobile} {
    ${text.h3Mobile}
  }
`
const BodyL = styled.h2`
  ${text.h2};
  margin: unset;
  color: ${colors.white};
  text-indent: -0.39em;

  ${media.mobile} {
    ${text.h3Mobile}
  }
`
const StyledEyebrow = styled.p`
  ${text.eyebrow};
  margin: unset;
  color: ${colors.white};
  margin-bottom: 3.333vw;
  ${media.fullWidth} {
    margin-bottom: 48px;
  }
`
const QuoteContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => (props.$cardactive ? "47.222vw" : "71.389vw")};
  ${media.fullWidth} {
    width: ${props => (props.$cardactive ? "680px" : "1028px")};
  }

  ${media.tablet} {
    width: ${props => (props.$cardactive ? "42.969vw" : "79.199vw")};
  }

  ${media.mobile} {
    width: ${props => (props.cardactive ? "86.916vw" : "unset")};
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => (props.$cardactive ? "79.444vw" : "71.389vw")};
  /* height: ${props => (props.cardactive ? "24.653vw" : "38.819vw")}; */
  gap: ${props => (props.$cardactive ? "4.167vw" : "unset")};
  ${media.fullWidth} {
    width: ${props => (props.$cardactive ? "1144px" : "1028px")};
    /* height: ${props => (props.cardactive ? "355px" : "559px")}; */
    gap: ${props => (props.$cardactive ? "60px" : "unset")};
  }
  ${media.tablet} {
    justify-content: space-between;
    width: ${props => (props.$cardactive ? "970px" : "unset")};
    /* height: ${props => (props.cardactive ? "41.113vw" : "50.391vw")}; */
    gap: ${props => (props.$cardactive ? "9.473vw" : "unset")};
  }

  ${media.mobile} {
    justify-content: space-between;
    flex-direction: column-reverse;
    width: ${props => (props.$cardactive ? "87.85vw" : "unset")};
    /* height: ${props => (props.cardactive ? "71.028vw" : "75.293vw")}; */
    gap: ${props => (props.$cardactive ? "5.477vw" : "87.383vw")};
  }
`
const PullQuoteWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.$cardactive ? "row" : "column")};
  background-image: ${props =>
    props.$cardactive ? `url(${CardBackgroundImg})` : `url(${LargeQuoteBg})`};
  background-size: ${props => (props.$cardactive ? "cover" : "cover")};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.667vw;
  overflow: hidden;
  width: 88.889vw;

  padding: ${props =>
    props.$cardactive ? "5.556vw 4.722vw" : "5.556vw 12.778vw 5.556vw 4.722vw"};
  ${media.fullWidth} {
    border-radius: 24px;
    width: 1280px;
    padding: ${props => (props.$cardactive ? "80px 68px" : "40x 18px")};
  }

  ${media.tablet} {
    justify-content: center;
    background-image: ${props =>
      props.$cardactive ? `url(${TabletCardBg})` : `url(${TabletBg})`};
    border-radius: 2.344vw;
    width: 94.727vw;
    height: ${props => (props.$cardactive ? "unset" : "75.293vw")};
    padding: ${props =>
      props.$cardactive
        ? "5.859vw 3.711vw 5.859vw 4.688vw"
        : "5.859vw 11.719vw 5.859vw 4.688vw"};
  }

  ${media.mobile} {
    flex-direction: column;
    justify-content: center;
    background-image: ${props =>
      props.$cardactive ? `url(${MobileCardImg})` : `url(${MobileLargeImg})`};
    background-size: ${props => (props.cardactive ? "contain" : "cover")};
    border-radius: 2.344vw;
    width: 95.794vw;
    padding: ${props =>
      props.$cardactive
        ? "4.206vw 4.206vw 14.019vw 4.206vw"
        : "9.346vw 4.206vw 18px 4.673vw"};
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 6.167vw;
  ${media.fullWidth} {
    padding-bottom: 89px;
  }
`
