import React, {useEffect} from "react"
import styled from "styled-components"
import media from "styles/media"
import ScrollTrigger from "gsap/ScrollTrigger"
import colors from "styles/colors"
import text from "styles/text"
import CheckCircle from "../images/CheckCircle.webp"
import {data} from "./content/StickyScrollContent"
import gsap from "gsap"
import getMedia from "utils/getMedia"
gsap.registerPlugin(ScrollTrigger)

const StickyScroll = () => {
  const listItems = data[1].list

  useEffect(() => {
    const items = gsap.utils.toArray(".listItem")
    const disapearItems = items.slice(3)
    const tl = gsap.timeline()
    gsap.set(disapearItems, {opacity: 0, xPercent: 0})
    disapearItems.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: getMedia("top top", "top top", "top 40%", "top top"),
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              xPercent: 0,
              duration: 0.8,
              ease: "power.3.inOut",
            })
          },
          onLeaveBack: () => {
            gsap.to(item, {
              xPercent: 0,
              opacity: 0,
              duration: 0.5,
              delay: 0.5,
            })
          },
        },
        stagger: 0.2 * index,
      })
    })

    gsap.to(".invisible", {
      height: "70%",
      scrollTrigger: {
        trigger: ".stickyWrapper",
        start: "top top",
        scrub: true,
      },
    })
  }, [])
  const runList = listItems.map((listItem, index) => {
    return (
      <ListItemDiv className={"listItem"} id="smooth-content" $index={index}>
        <ListHeadline>
          <StyledCheck src={CheckCircle} />
          {listItem.headline}
          <InlineBody>{listItem.body}</InlineBody>
        </ListHeadline>
      </ListItemDiv>
    )
  })
  return (
    <Wrapper>
      <AllWrapperDiv className={"stickyWrapper"}>
        <StableBodyDiv>
          <StableContentDiv>
            <ProgressBar>
              <InvisibleProgress className={"invisible"} />
              <ProgressBarSlide />
            </ProgressBar>
            <StableHeader>
              {"Lorem Ipsum Dolor Sit Amet Consectetur"}
            </StableHeader>
            <StableBody>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ipsum, viverra ac laoreet non, efficitur non ipsum. Integer nec ex id magna feugiat ultricies."
              }
            </StableBody>
          </StableContentDiv>
        </StableBodyDiv>
        <LongListDiv>{runList}</LongListDiv>
      </AllWrapperDiv>
    </Wrapper>
  )
}

export default StickyScroll
const InlineBody = styled.p`
  ${text.bodyM}
  margin:unset;
`
const ListHeadline = styled.p`
  position: relative;
  ${text.bodyMBold}
  margin:unset;
`

const StyledCheck = styled.img`
  position: absolute;
  width: 2.547vw;
  height: 2.547vw;
  left: -3.472vw;
  ${media.fullWidth} {
    width: 37px;
    height: 37px;
    left: -50px;
  }

  ${media.tablet} {
    width: 4.297vw;
    height: 4.297vw;
    left: -5.445vw;
  }

  ${media.mobile} {
    width: 7.477vw;
    height: 7.477vw;
    left: -9vw;
  }
`
const ListItemDiv = styled.div`
  display: flex;
  width: 44.167vw;
  padding: 1.25vw 5vw 1.25vw 4.167vw;

  ${media.fullWidth} {
    width: 636px;
    padding: 18px 72px 18px 60px;
  }

  ${media.tablet} {
    width: 46.023vw;
    padding: 18px;
  }

  ${media.mobile} {
    width: 100%;
  }
`
const LongListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 46.667vw;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
  ${media.fullWidth} {
    width: 672px;
  }

  ${media.tablet} {
    width: 49.563vw;
    height: 100%;
    padding: 1.758vw 4.102vw 1.758vw 3.859vw;
  }

  ${media.mobile} {
    width: 100%;
    height: 100%;
    padding: 4.206vw 6.075vw 21.206vw 9.346vw;
  }
`
const StableBody = styled.p`
  ${text.bodyM}
  margin:unset;
`
const StableHeader = styled.h2`
  ${text.h2}
  margin:unset;
`
const StableContentDiv = styled.div`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  color: black;
  top: 9vw;
  height: 26.944vw;
  gap: 1.667vw;
  padding: 0vw 4.583vw 0vw 2.847vw;
  ${media.fullWidth} {
    top: 72px;
    height: 388px;
    gap: 24px;
    padding: 10px 66px 0px 41px;
  }

  ${media.tablet} {
    height: 26.994vw;
    gap: 1.953vw;
    top: 5vw;
  }

  ${media.mobile} {
    width: 100%;
    height: 23%;
    gap: 1.869vw;
    position: relative;
  }
`
const ProgressBarSlide = styled.div`
  position: relative;
  left:-0.069vw;
  width: 0.255vw;
  height: 30%;
  background-color: #471147;
  border-radius: 4.514vw;

  ${media.fullWidth} {
    width: 3px;
    left: -.5px;
  }
  ${media.tablet} {
    width: 0.36vw;
    left: -0.12vw;
  }
  ${media.mobile} {
    display: none;
  }
`
const InvisibleProgress = styled.div`
  height: 0%;
`
const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${colors.primaryPurple};
  top: 0vw;
  left: -0.139vw;
  width: 0.100vw;
  height: 26.944vw;

  ${media.fullWidth} {
    width: 1px;
    left: -2px;
    height: 418px;
  }
  ${media.tablet} {
    left: -2x;
    width: 0.24vw;
    height: 28.523vw;
  }
  ${media.mobile} {
    display: none;
  }
`
const StableBodyDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 43.125vw;
  height: 100%;

  ${media.fullWidth} {
    width: 621px;
  }

  ${media.tablet} {
    width: 43.75vw;
    height: 100%;
  }

  ${media.mobile} {
    width: 87.85vw;
    height: 15%;
  }
`
const AllWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    flex-direction: column;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5.556vw 2.778vw 5.556vw 7.431vw;
  ${media.fullWidth} {
    padding: 80px 40px 80px 107px;
  }
  ${media.mobile} {
    margin-bottom: 13.333vw;
    padding: 21.333vw 10.667vw 0.333vw 28.533vw;
  }
`
