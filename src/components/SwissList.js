import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text'; 
import {data} from './content/SwissListContent';

const SwissList = () => {
  return (
    <Wrapper>
      <Header>{data.header}</Header>
      <MappedBodysWrapper>

      </MappedBodysWrapper>
    </Wrapper>
  )
}

export default SwissList
const MappedBodysWrapper = styled.div`
display: flex;
`
const Header = styled.h3`
${text.h3}
margin:unset;
color:black;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 3.472vw 6.389vw 3.472vw 9.167vw;
`