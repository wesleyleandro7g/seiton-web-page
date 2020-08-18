import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Wrapper = styled.div`
  width: 70%;
  height: 60%;
  border-top: 0.4em solid #797979;

  @media (max-width: 450px) {
    width: 100%;
    border-top: 0.2em solid #797979;
  }
`
export const TitleWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 450px) {
    justify-content: center;
  }
`
export const ItemsWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 450px) {
    align-items: center;
  }
`
export const Title = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  color: #797979;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1em;
  }
`
export const ItemsLink = styled(AnchorLink)`
  font-size: 1em;
  font-weight: bold;
  color: #797979;
  margin-bottom: 0.5em;
  transition: all 200ms;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #333;
  }

  @media (max-width: 450px) {
    text-align: center;
    font-size: 0.8em;
  }
`
export const Items = styled.h4`
  font-size: 1em;
  font-weight: bold;
  color: #797979;
  margin-bottom: 0.5em;
  transition: all 200ms;

  &:hover {
    color: #333;
  }

  @media (max-width: 450px) {
    text-align: center;
    font-size: 0.8em;
  }
`
export const IconWrapper = styled.div`
  display: flex;
`
export const Icon = styled.div`
  transition: all 200ms;
  color: #797979;

  &:hover {
    color: ${props => props.colorIcon};
    cursor: pointer;
  }
`