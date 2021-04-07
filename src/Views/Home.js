import React from "react"
import * as S from './style.js'

// Abstract out Header, Nav, and Body into own components that the views can use.. otherwise you are duplicating code..


const Home = ({config}) => {

  // Render view based on config, whether it is from a state with the builder or from the routes with a model config object..

  const renderHeader = () => {
    return (
      <div>
        <S.Title color={config.header.heading.color}>{config.header.heading.value}</S.Title>
      </div>
    )
  }

  // Nav should be rendered same on all pages.... you are duplicating right now..
  const renderNav = () => {
    const items = config.header.nav.items.map(item => <a style={{color: config.header.nav.color}} href={item.url}><li>{item.name}</li></a>)

    return (
      <S.Nav>
        <ul>
          { items }
        </ul>
      </S.Nav>
    )
  }


  // used by renderBody to render elements dynamically from the content array..
  const renderElement = ({tag, value, color}) => {
    switch (tag) {
      case 'h2':
        return <h2 style={{color: color}}>{value}</h2>
      case 'p':
        return <p style={{color: color}}>{value}</p>
    }
  }

  const renderBody = () => {
    return config.pages.home.body.content.map(element => renderElement(element)) // hard-coded
  }

  return (
    <React.Fragment>
      
      <S.Header background={config.header.background}>
        { renderHeader() }
        { renderNav() }
      </S.Header>


      { renderBody() }
    </React.Fragment>
  )
}

export default Home