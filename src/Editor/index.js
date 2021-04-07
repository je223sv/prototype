
import React from 'react'
import ColorPicker from '../color-picker'


// Builder should get configs
// Builder should add config to state to change it
// Builder should render view from state
// Builder should save state to config...




// To do:
// -- Fix settings for body, so everything works.. [x]
// -- Fix so it works for all pages.. (home, about, contact..) [x]
// -- Ensure that you can add/remove menu items too... [x] ~ not sure about id as length just yet,, but look at that later..
// -- Fix the styling better.. [] // left-right view // better looking headers, navs, body, etc..
// -- Improve the coding/logic.. []




const Editor = ({ config, component, nav, updateNavBackground, updateNavItemName, updateNavItemURL, deleteNavItem, addNavItem, updateHeaderBackground, updateTitleColor, updateTitleValue, updateNavColor, updateBodyBackground, updateBodyColor, updateBodyHeading, updateBodyContent, updateContentValue, updateContentColor, changePage, createNavItem }) => {
  // Create state out of config... then save those states to config when save..
  const [settings, setSettings] = React.useState(config)

  const [navItemName, setNavItemName] = React.useState("")
  const [navItemURL, setNavItemURL] = React.useState("")


  const [activeEditor, setActiveEditor] = React.useState("theme")

  const [selectedPage, setSelectedPage] = React.useState("home")



  const handleNavItemName = (event) => {
    setNavItemName(event.target.value)
  }

  const handleNavItemURL = (event) => {
    setNavItemURL(event.target.value)
  }

  const createNewNavItem = () => {
    createNavItem(navItemName, navItemURL)
    setNavItemName("")
    setNavItemURL("")
  }



  // this view must be dynamic,, in a way that it will render editor for settings specific for each individual page...
  
  

  // nav settings should always be rendered...

  const renderHeaderEditor = () => {
    // Render settings for header only if page has an header..
    // Must remove header from config later to see if it works..
    // if (!(Object.keys(config).includes('header'))) {
    //   return
    // }


    // Nav
    // => YOU should be able to change order of links, and you should also be able to choose existing pages as link

    const links = config.header.nav.items.map(link => (
      <div style={{marginBottom: '10px'}}>
        <input type="text" value={link.name} placeholder="name" onChange={event => updateNavItemName(event, link.id)} />
        <input type="text" value={link.url} placeholder="url" onChange={event => updateNavItemURL(event, link.id)} /><br />
        <button onClick={event => deleteNavItem(event, link.id)}>delete link</button>
      </div>
    ))

    return (
      <div>
        <p>Background</p>
        <ColorPicker 
          onChange={updateHeaderBackground}
          color={config.header.background}
        />
        <hr />
        <p>Title</p>
        <input type="text" value={config.header.heading.value} onChange={updateTitleValue} /><br />
        <p>Color</p>
        <ColorPicker 
          onChange={updateTitleColor}
          color={config.header.color}
        />
        <hr />
        <p>Navigation</p>

        {/* fix here */}

        <p>Color</p>
        <ColorPicker 
          onChange={updateNavColor}
          color={config.header.nav.color}
        />


        {/* links */}

        <p>Links</p>

        { links }

        {/* add links */}

        <p>Add link</p>

        <input type="text" placeholder="name" value={navItemName} onChange={handleNavItemName} />
        <input type="text" placeholder="url" value={navItemURL} onChange={handleNavItemURL} /><br />
        <button onClick={createNewNavItem}>add link</button>




      </div>
    )

  }

  const handleSelectedPage = (event) => {
    setSelectedPage(event.target.value)
    changePage(event)
  }


  
  const renderContentEditor = () => {

    // should be able to add pages... and content to each pages...


    // render input fields to update the values...

    const options = Object.keys(config.pages).map(page => <option value={page}>{page}</option>)

    
    // render: value input, color change for all elements...

    const x = config.pages[selectedPage].body.content.map(element => (
      <div>
        <input type="text" value={element.value} onChange={event => updateContentValue(event, selectedPage, element.id)} />
        <p>Color</p>
        <ColorPicker 
          onChange={event => updateContentColor(event, selectedPage, element.id)}
          color={element.color}
        />
        <hr />
      </div>
    ))

    return (
      <div>
        <select value={selectedPage} onChange={handleSelectedPage}>
          {options}
        </select>
        <hr />
        { x }
      </div>
    )
  }



  const handleEditor = (event) => {
    setActiveEditor(event.target.value)
  }

  const renderEditor = () => {
    switch (activeEditor) {
      case 'theme':
        // return renderThemeEditor()
        return
      case 'header':
        return renderHeaderEditor()
      case 'content':
        return renderContentEditor()
    }
  }

  return (
    <div>
      <select onChange={handleEditor} value={activeEditor}>
        <option value="theme">theme</option>
        <option value="header">header</option>
        <option value="content">content</option>
      </select>

      <hr />
      { renderEditor() }
    </div>
  )
}

export default Editor












  // Start by changing text content.. ---> should be based on the config...

  // have method generate editor for each key of the component, i.e. background, color, heading, etc.. 



  // const renderHeaderEditor = () => {
  //   // Will render based on editor!!!

  //   // Update heading.. must pass -> what component, and what part it is.. so it knows what config to update!!

  //   // I get config from parent, now I just need to know how to best update it... and it should work to add another heading,
  //   // p, etc...


  //   // You can pass the right type/page, as you render these... <-- this one for example is specifically for header "renderHEADEREditor"

  //   return (
  //     <div>
  //       <h3>Header editor</h3>
  //       <input type="text" name="heading" value={settings.header.heading} onChange={event => updateHeading(event, 'header')} placeholder="heading" />
  //     </div>
  //   )
  // }