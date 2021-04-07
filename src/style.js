import styled from 'styled-components'

export const Title = styled.h1`
  color: red;
`

export const Container = styled.div`
  background: red;
  padding: 20px;
  height: 800px;
  display: flex;
`

export const RightContainer = styled.div`
  border: 1px solid #333;
`

export const Left = styled.div`
  background: #f4f4f4;
  width: 15%;
  height: 100%;
`

export const Right = styled.div`
  background: #fff;
  width: 85%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`

/* ------------------------------ */

export const TemplateContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 1px solid black;
`
export const TemplateBillboard = styled.div`
  background: ${props => props.background};
  margin: 0;
  padding: 15px;
`
export const TemplateTitle = styled.h1`
  margin: 0;
  padding: 0;
`
export const TemplateMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  background: ${props => props.background};

  a {
    color: ${props => props.color};
  }

  a:hover {
    background: ${props => props.hoverColor};
    cursor: pointer;
  }
  
`
export const TemplateMenuItem = styled.a`
  margin: 0;
  padding: 10px;
  text-decoration: none;
`
export const TemplateHeader = styled.h2`
  padding: 10px;
`
export const TemplateText = styled.p`
  padding: 10px;
`








export const PageHeader = styled.div`
  display: flex;
  background: ${props => props.background};
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  margin: 0;
`

export const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: ${props => props.color};
  font-size: 26px;
`

export const PageNav = styled.nav`

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

export const TopMenu = styled.div`
  background: #333;
  padding: 5px 15px;
  display: flex;
  justify-content: flex-end;

  a {
    color: #333;
    text-decoration: none;
    background: white;
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 10px;
    font-family: 'arial';
  }
`

export const BodyContainer = styled.div`
  padding: 20px 20%;

  h2 {
    margin: 0;
  }
`