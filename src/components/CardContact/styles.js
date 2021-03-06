import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"
import { fonts, colors } from "../../styles/Global"

export const Wrapper = styled.div`
  width: 70%;
  height: 60%;
  border-top: 0.4em solid ${colors.tertiaryColor};

  @media (max-width: 1650px) {
    border-top: 0.159em solid ${colors.tertiaryColor};
  }

  @media (max-width: 900px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 0.159em solid ${colors.tertiaryColor};
  }

  @media (max-width: 450px) {
    border-top: 0.1em solid ${colors.tertiaryColor};
  }
`
export const TitleWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`
export const ItemsWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
    margin: 1.5em 0;
    text-align: center;
  }
`
export const Title = styled.h2`
  font-size: 1em;
  font-weight: bold;
  color: ${colors.tertiaryColor};
  text-transform: uppercase;
  margin-top: 15%;
`
export const ItemsLink = styled(AnchorLink)`
  font-size: 1em;
  font-family: ${fonts.primaryFont}, sans-serif;
  font-weight: bold;
  color: ${colors.tertiaryColor};
  transition: all 200ms;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-bottom: -5px;

  &:hover {
    color: ${colors.primaryColor};
  }

  @media (max-width: 900px) {
    font-size: 0.999em;
  }

  @media (max-width: 450px) {
    font-size: 0.84em;
  }
`
export const Items = styled.h4`
  font-size: 1em;
  font-weight: bold;
  color: ${colors.tertiaryColor};
  margin-bottom: 0.5em;
  transition: all 200ms;

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
  color: ${colors.tertiaryColor};

  &:hover {
    color: ${props => props.colorIcon};
    cursor: pointer;
  }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`
