import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  background: ${props => props.background};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${props => props.color};
  font-size: 26px;
`

export const Nav = styled.nav`

  ul {
    list-style: none;
    display: flex;
  }

  ul li {
    margin-left: 6px;
    color: ${props => props.color};
  }

  a {
    text-decoration: none;
  }
`
