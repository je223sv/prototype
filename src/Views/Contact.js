import React from "react"
 

// Abstract out Header, Nav, and Body into own components that the views can use.. otherwise you are duplicating code..


const Contact = ({config, header}) => {

  // // Render view based on config, whether it is from a state with the builder or from the routes with a model config object..

  // const renderHeader = () => {
  //   return (
  //     <div style={{background: config.header.background}}>
  //       <h1 style={{color: config.header.color}}>{config.header.heading}</h1>
  //     </div>
  //   )
  // }

  // // Nav should be rendered same on all pages.... you are duplicating right now..
  // const renderNav = () => {
  //   const items = nav.items.map(item => <a style={{color: nav.color}} href={item.url}><li>{item.name}</li></a>)

  //   return (
  //     <div style={{background: nav.background}}>
  //       <ul>
  //         { items }
  //       </ul>
  //     </div>
  //   )
  // }

  // const renderBody = () => {
  //   return (
  //     <div>
  //       <h2>{ config.body.heading }</h2>
  //       <p>{ config.body.content }</p>
  //     </div>
  //   )
  // }

  return (
    <React.Fragment>
      {/* { renderHeader() }
      { renderNav() }
      { renderBody() } */}
    </React.Fragment>
  )
}

export default Contact