import React, {useEffect} from "react"
import styled from "styled-components"
import {autoSliderData} from "../components/content/AutoSliderData"
import colors from "../styles/colors"
import media from "../styles/media"
import {gsap} from "gsap"
import text from "../styles/text"
import {SliderHeader} from "../components/content/AutoSliderData"
import getMedia from "../utils/getMedia"
const AutoSlider = ({scrollto}) => {
  const startGsap = () => {
    let loadSpeed = 7
    let slideSpeed = 1.5
    const targetDiv = document.querySelectorAll(`.boxself`)
    const tl = gsap.timeline({
      paused: false,
      repeat:-1,
      
    })
    
    tl.to(".growme.num1", {width: 100, duration: `${loadSpeed }`})
    tl.to('.boxself',{xPercent: -335, duration: `${slideSpeed }`, ease: "back.inOut"},"-=4")
    tl.to(".growme.num2", {width: 100, duration: `${loadSpeed}`,ease:'smooth'}, "-=3")
    tl.to(
      targetDiv,
      {xPercent: -670, duration: `${slideSpeed}`, ease: "back.inOut"},
      "-=4"
    )
    tl.to(".growme.num3", {width: 100, duration: `${loadSpeed}`, ease:'smooth'}, "-=3")
    tl.to(
      targetDiv,
      {xPercent: 0, duration: `${slideSpeed}`, ease: "back.inOut"},
      "-=4"
    )
    
  
  }
  useEffect(() => {
    const target = document.getElementById(`#cardwrapper`)
    gsap.set(target, {xPercent: 0})
    startGsap()
  }, [])

  const runCards = (imgObj, index) => {
    return (
      <Card className={`boxself`} key={index}>
        <Image className={"logoImg"} $srcurl={imgObj.img} alt={imgObj.img} />
        <CardTextContentDiv>
          <ContentHeadline>{imgObj.Header}</ContentHeadline>
          <ContentBody>{imgObj.Body}</ContentBody>
        </CardTextContentDiv>
      </Card>
    )
  }

  return (
    <Wrapper>
      <BoxContainer>
        <Headline>{SliderHeader.headline}</Headline>
        <ViewBox>
          <CardRelativeWrapper className={"cardwrapper"}>
            {autoSliderData.map(runCards)}
          </CardRelativeWrapper>
        </ViewBox>
      </BoxContainer>
      <Controls>
        <ButtonCustom>
          <ButtonGrowth className={"growme num1"} />
        </ButtonCustom>
        <ButtonCustom>
          <ButtonGrowth className={"growme num2"} />
        </ButtonCustom>
        <ButtonCustom>
          <ButtonGrowth className={`growme num3`} />
        </ButtonCustom>
      </Controls>
    </Wrapper>
  )
}

export default AutoSlider
const ButtonGrowth = styled.div`
  position: relative;
  display: flex;
  border-radius: 10px;
  height: 100%;
  max-width: 100%;
  background-color: #f5f4f7;
  opacity: 100%;
  ${media.fullWidth} {
    border-radius: 10px;
  }

  ${media.tablet} {
    border-radius: 0.977vw;
  }

  ${media.mobile} {
  }
`
const ButtonCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: rgba(245, 244, 247, 0.4);
  border-radius: 0.694vw;
  height: 0.347vw;
  width: 62px;
  ${media.fullWidth} {
    border-radius: 10px;
    height: 5px;
    width: 62px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 2.778vw;
  gap: 1.389vw;
  border-radius: 1vw;

  ${media.mobile} {
    gap: 1.402vw;
    border-radius: 3.505vw;
  }
`
const ContentBody = styled.p`
  ${text.bodyM}
  margin: unset;
`
const ContentHeadline = styled.h5`
  ${text.h5}
  margin:unset;
`
const CardTextContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`
const Image = styled.div`
  display: flex;
  background-image: ${props =>
    props.$srcurl ? `url(${props.$srcurl})` : `unset`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 13.75vw;
  height: 17.917vw;
  ${media.fullWidth} {
    width: 198px;
    height: 258px;
  }

  ${media.tablet} {
    width: 19.336vw;
    height: 25.195vw;
  }

  ${media.mobile} {
  }
`
//////Wrapper for all content being animated
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  background: linear-gradient(
    212deg,
    rgba(118, 88, 205, 0.8) 0%,
    rgba(118, 88, 205, 0.1) 101.67%
  );
  border-radius: 1.667vw;
  height: 29.653vw;
  width: 24.583vw;
  padding: 1.667vw 1.667vw 3.75vw 1.389vw;
  ${media.fullWidth} {
    border-radius: 24px;
    height: 427px;
    width: 354px;
    padding: 24px 24px 54px 20px;
  }

  ${media.tablet} {
    height: 41.699vw;
    width: 29.273vw;
    padding: 2.344vw 1.855vw 2.344vw 2.467vw;
  }

  ${media.mobile} {
  }
`
const CardRelativeWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 2.847vw;
  ${media.fullWidth} {
    gap: 41px;
  }

  ${media.tablet} {
    gap: 3.2vw;
  }

  ${media.mobile} {
  }
`
////////////////////////////

/////view Box this is permanant and needs a height and width;
const ViewBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  width: 79.444vw;
  border-radius: 1.667vw;
  ${media.fullWidth} {
    width: 1144px;
    border-radius: 24px;
  }

  ${media.tablet} {
    width: 94.188vw;
    
  }

  ${media.mobile} {
    width: unset;
    height: unset;
    border-radius: 5.607vw;
  }
`
///////////////////////////////////////////
const Headline = styled.h2`
  ${text.h2}
  color:${colors.white};
  margin: unset;
  text-align: center;
`
const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  gap: 4.167vw;
  ${media.fullWidth} {
    gap: 60px;
  }

  ${media.tablet} {
    gap: 5.859vw;
  }

  ${media.mobile} {
    gap: 9.346vw;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--Background, #3d2562);
  padding: 5.556vw 5.556vw;
  ${media.fullWidth} {
    padding: 80px 0px;
  }

  ${media.tablet} {
    padding: 60px 0vw;
  }

  ${media.mobile} {
    padding: 14.019vw 9.346vw;
  }
`
