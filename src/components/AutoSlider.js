import React, {useEffect} from "react"
import styled from "styled-components"
import {autoSliderData} from "../components/content/AutoSliderData"
import colors from "../styles/colors"
import media from "../styles/media"
import {gsap} from "gsap"
import text from "../styles/text"

const AutoSlider = ({scrollto}) => {
  const startGsap = () => {
    let loadSpeed = 6
    let slideSpeed = 2

    const targetDiv = document.querySelectorAll(`.boxself`)
    const toEach = document.querySelectorAll('.boxself')
    const tl = gsap.timeline({
      paused: false,
    })
    tl.from(['.growme.num1','.growme.num2','growme.numb3'], {width:0})
    tl.to(".growme.num1", {width: 100, duration: `${loadSpeed}`})
    toEach.forEach((item)=>{
      return tl.to(item, {xPercent: -335, duration: `${slideSpeed}`,ease: "back.inOut"},'-=3.5')})
     tl.to(".growme.num2", {width: 100, duration: `${loadSpeed}`},"-=1.5")
    tl.to(targetDiv, {xPercent: -670, duration: `${slideSpeed}`, ease: "back.inOut"}, "-=3.5")
    tl.to(".growme.num3", {width: 100, duration: `${loadSpeed}`},"-=1.5")
    tl.to(targetDiv, {xPercent: 0, duration:`${slideSpeed+1}`, ease: "back.inOut"},'-=3')
    tl.repeat(-1);
    let boxself = document.querySelectorAll('.boxself')
    boxself.forEach(item=> item.addEventListener('click',()=>{
        tl.pause();
    }))
    let play = document.querySelectorAll('.growme')
    play.forEach(item=> item.addEventListener('click',()=>{
      return tl.play();
    }));

  }
  useEffect(() => {
    const target = document.getElementById(`#cardwrapper`)
    gsap.set(target, {xPercent: 0})
    startGsap()

  }, [])

  const runCards = (imgObj, index) => {
    return (
      <Card
        className={`boxself`} 
        key={index}>
        <Image className={'logoImg'} $srcurl={imgObj.img} alt={imgObj.img} />
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
        <ViewBox>
          <CardRelativeWrapper className={"cardwrapper"}>
            {autoSliderData.map(runCards)}
          </CardRelativeWrapper>
        </ViewBox>
      </BoxContainer>
      <Controls>
        <ButtonCustom>
          <ButtonGrowth
            className={"growme num1"}
          />
        </ButtonCustom>
        <ButtonCustom >
          <ButtonGrowth
            className={"growme num2"}
          />
        </ButtonCustom>
        <ButtonCustom >
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
  background-color: white;
`
const ButtonCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: rgba(0,0,0,1.5);
  border-radius: 10px;
  height: 0.417vw;
  width: 4.306vw;
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${colors.grey};
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
  min-height: 29.653vw;
  min-width: 24.583vw;
  width: 24.583vw;
  padding: 24px 24px 54px 20px;
`
const CardRelativeWrapper = styled.div`
  position: relative;
  display: flex;
  height: 29.653vw;
  width: 24.583vw;
  gap: 2.847vw;
`
////////////////////////////

/////view Box this is permanant and needs a height and width;
const ViewBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  height: 29.653vw;
  width: 79.444vw;
  border-radius: 1.667vw;
`
///////////////////////////////////////////
const Slider = styled.div`
  display: flex;
`

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.667vw;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--Background, #3d2562);
  padding: 3.472vw 5.556vw;
  ${media.fullWidth} {
    padding: 50px 0px;
  }

  ${media.tablet} {
    padding: 3.906vw 0vw;
  }

  ${media.mobile} {
    padding: 14.019vw 0vw;
  }
`

