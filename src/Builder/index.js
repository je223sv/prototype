import React from 'react'
import configuration from './config.js'

import Home from '../Views/Home.js'
import About from '../Views/About.js'
import Contact from '../Views/Contact.js'

import * as S from './style.js'

// => YOU ONLY must get the (((builder and editor))) right... because the views (Home, about, contact, will simply render what the config gives it..)


import Editor from '../Editor'


// You should be able to flip between Components... so if you choose Home, then the Home component will be shown, and the config for it..


// Must get config here and add it as state
// then you must allow editor to update the state, and eventually permit the changes... by calling methods passed from builder..
// and view to render the state...

const Builder = () => {
  const [activeComponent, setActiveComponent] = React.useState('home')
  const [config, setConfig] = React.useState(configuration)

  // Update headers

  const updateHeaderBackground = (color) => {
    const copy = { ...config }
    copy.header.background = color.hex
    // copy[activeComponent].header.background = color.hex
    setConfig(copy)
  }

  const updateTitleColor = (color) => {
    const copy = { ...config }
    copy.header.heading.color = color.hex
    setConfig(copy)
  }

  const updateTitleValue = (event) => {
    const copy = { ...config }
    copy.header.heading.value = event.target.value
    setConfig(copy)
  }

  // Update nav

  const updateNavColor = (color) => {
    const copy = { ...config }
    copy.header.nav.color = color.hex
    setConfig(copy)
  }

  const updateNavItemName = (event, id) => {
    const copy = { ...config }
    const item = copy.header.nav.items.find(item => item.id === id)
    item.name = event.target.value
    setConfig(copy)
  }

  const updateNavItemURL = (event, id) => {
    const copy = { ...config }
    const item = copy.header.nav.items.find(item => item.id === id)
    item.url = event.target.value
    setConfig(copy)
  }

  const createNavItem = (name, url) => {
    const copy = { ...config }
    const item = { id: copy.header.nav.items.length, name: name, url: url }
    copy.header.nav.items.push(item)
    setConfig(copy)
  }

  const deleteNavItem = (event, id) => {
    const copy = { ...config }
    const index = copy.header.nav.items.findIndex(item => item.id === id)
    copy.header.nav.items.splice(index, 1)
    setConfig(copy)
  }


  // Update content

  const updateContentValue = (event, page, id) => {
    const copy = { ...config }
    const element = copy.pages[page].body.content.find(x => x.id === id)
    element.value = event.target.value
    setConfig(copy)
  }

  const updateContentColor = (color, page, id) => {
    const copy = { ...config }
    const element = copy.pages[page].body.content.find(x => x.id === id)
    element.color = color.hex
    setConfig(copy)
  }

  


  // // Update nav

  // const updateNavBackground = (color) => {
  //   const copy = { ...config }
  //   copy.nav.background = color.hex
  //   setConfig(copy)
  // }

  // const updateNavColor = (color) => {
  //   const copy = { ...config }
  //   copy.nav.color = color.hex
  //   setConfig(copy)
  // }

  // const updateNavItemName = (event, id) => {
  //   const copy = { ...config }
  //   const item = copy.nav.items.find(x => x.id === id)
  //   item.name = event.target.value
  //   setConfig(copy)
  // }

  // const updateNavItemURL = (event, id) => {
  //   const copy = { ...config }
  //   const item = copy.nav.items.find(x => x.id === id)
  //   item.url = event.target.value
  //   setConfig(copy)
  // }

  // const removeNavItem = (event, id) => {
  //   const copy = { ...config }
  //   const index = copy.nav.items.findIndex(x => x.id === id)
  //   copy.nav.items.splice(index, 1)
  //   setConfig(copy)
  // }

  // const addNavItem = (name, URL) => {
  //   const copy = { ...config }
  //   const item = { id: copy.nav.items.length, name: name, url: URL }
  //   copy.nav.items.push(item)
  //   setConfig(copy)
  // }

  // // Update body

  // const updateBodyBackground = (color) => {
  //   const copy = { ...config }
  //   copy[activeComponent].body.background = color.hex
  //   setConfig(copy)
  // }

  // const updateBodyColor = (color) => {
  //   const copy = { ...config }
  //   copy[activeComponent].body.color = color.hex
  //   setConfig(copy)
  // }

  // const updateBodyHeading = (event) => {
  //   const copy = { ...config }
  //   copy[activeComponent].body.heading = event.target.value
  //   setConfig(copy)
  // }

  // const updateBodyContent = (event) => {
  //   const copy = { ...config }
  //   copy[activeComponent].body.content = event.target.value
  //   setConfig(copy)
  // }


  // Render


  const renderComponent = () => {
    // These should be dynamic..
    switch (activeComponent) {
      case 'home':
        return <Home config={config} /> // with routes you want to pass the config from the database..
      case 'about':
        return <About config={config} />
      // case 'contact':
      //   return <Contact config={config.pages[activeComponent]} header={config.header} />
    }
    return <Home /> 
  }

  const changeActiveComponent = (event) => {
    setActiveComponent(event.target.value)
  }


  return (
    <S.Container>
      <S.EditorContainer>
        <h1>Builder</h1>
        {/* { renderSelectComponent() } */}
        <hr />
        <Editor 
          config={config}
          component={activeComponent}
          changePage={changeActiveComponent}
          // nav={config.nav}
          // updateNavBackground={updateNavBackground}
          // updateNavColor={updateNavColor}
          updateNavItemName={updateNavItemName}
          updateNavItemURL={updateNavItemURL}
          createNavItem={createNavItem}
          deleteNavItem={deleteNavItem}
          // removeNavItem={removeNavItem}
          // addNavItem={addNavItem}
          updateHeaderBackground={updateHeaderBackground}
          updateTitleColor={updateTitleColor}
          updateTitleValue={updateTitleValue}
          updateNavColor={updateNavColor}
          updateContentValue={updateContentValue}
          updateContentColor={updateContentColor}
          // updateBodyBackground={updateBodyBackground}
          // updateBodyColor={updateBodyColor}
          // updateBodyHeading={updateBodyHeading}
          // updateBodyContent={updateBodyContent}
        />
      </S.EditorContainer>
      <S.PreviewContainer>
        { renderComponent() }
      </S.PreviewContainer>
    </S.Container>
  )

  // You should be able to render a view (home, about, contact) with a config file... whether it is from model or from an object when testing..
  // So that with routes you pass the object, but with view you pass the state.. as you want to change it...

}

export default Builder


// I want to render the component in a view component, the same component that will be rendered at a route... and be able to change it, and see changes reflect in the view...