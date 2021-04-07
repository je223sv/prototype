import React from "react"
 

// Abstract out Header, Nav, and Body into own components that the views can use.. otherwise you are duplicating code..


const About = ({config}) => {

  // Render view based on config, whether it is from a state with the builder or from the routes with a model config object..

  const renderHeader = () => {
    return (
      <div style={{background: config.header.background}}>
        <h1 style={{color: config.header.heading.color}}>{config.header.heading.value}</h1>
      </div>
    )
  }

  // Nav should be rendered same on all pages.... you are duplicating right now..
  const renderNav = () => {
    const items = config.header.nav.items.map(item => <a style={{color: config.header.nav.color}} href={item.url}><li>{item.name}</li></a>)

    return (
      <div style={{background: config.header.nav.background}}>
        <ul>
          { items }
        </ul>
      </div>
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
    return config.pages.about.body.content.map(element => renderElement(element)) // hard-coded
  }

  return (
    <React.Fragment>
      { renderHeader() }
      { renderNav() }
      { renderBody() }
    </React.Fragment>
  )
}

export default About