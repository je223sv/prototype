
import React from 'react'
import * as S from './style.js'
import ColorPicker from '../color-picker'

import { useParams } from 'react-router-dom'

import HomePage from '../HomePage.js'



const Editor = () => {
  const [config, setConfig] = React.useState({})
  const [siteExist, setSiteExist] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  const [changesMade, setChangesMade] = React.useState(false)

  const [activeEditor, setActiveEditor] = React.useState("theme")
  const [navItemName, setNavItemName] = React.useState("")
  const [navItemURL, setNavItemURL] = React.useState("")

  const { site } = useParams()

  React.useEffect(() => {
    getConfig()
  }, [])

  React.useEffect(() => {
    if (loading) {
      setLoading(false)
    }
  }, [config])


  // Get config if site exist, and render page, otherwise render 404!!
  const getConfig = () => {
    const websites = JSON.parse(localStorage.getItem('websites'))

    if (Object.keys(websites).includes(site)) {
      setSiteExist(true)
      setConfig(websites[site])
    }
  }

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

  const renderEditor = () => {
    // have a save button up in the top too... that compare original config with new.. if any differences.. activate that button to save to localStorage..
    return (
      <S.EditorContainer>
        <div>
          <select onChange={handleEditor} value={activeEditor}>
            <option value="theme">theme</option>
            <option value="header">header</option>
            <option value="content">content</option>
          </select>
          <p>{changesMade && renderSaveBtn()}</p>
      <hr />
      {renderTheEditor()}
    </div>
      </S.EditorContainer>
    )
  }

  const renderTheEditor = () => {
    switch (activeEditor) {
      case 'theme':
        return renderThemeEditor()
      case 'header':
        return renderHeaderEditor()
      case 'content':
        return renderContentEditor()
    }
  }

  const renderThemeEditor = () => {
    return (
      <S.ThemeContainer>
        <S.Theme active></S.Theme>
        <S.Theme></S.Theme>
        <S.Theme></S.Theme>
        <S.Theme></S.Theme>
      </S.ThemeContainer>
    )
  }

  const renderHeaderEditor = () => {
    const links = config.header.nav.items.map(link => (
      <div style={{marginBottom: '10px'}}>
        <input type="text" value={link.name} placeholder="namn" onChange={event => updateNavItemName(event, link.id)} />
        <input type="text" value={link.url} placeholder="url" onChange={event => updateNavItemURL(event, link.id)} /><br />
        <button onClick={event => deleteNavItem(event, link.id)}>ta bort länk</button>
      </div>
    ))

    return (
      <div>
        <p><strong>Bakgrund</strong></p>
        <ColorPicker 
          onChange={updateHeaderBackground}
          color={config.header.background}
        />
        <hr />
        <p><strong>Titel</strong></p>
        <input type="text" value={config.header.heading.value} onChange={updateTitleValue} /><br />
        <p>Färg</p>
        <ColorPicker 
          onChange={updateTitleColor}
          color={config.header.heading.color}
        />
        <hr />
        <p><strong>Navigation</strong></p>

        <p>Färg</p>
        <ColorPicker 
          onChange={updateNavColor}
          color={config.header.nav.color}
        />


        {/* links */}
        <hr />
        <p><strong>Länkar</strong></p>

        { links }

        {/* add links */}

        <p>Lägg till länk</p>

        <input type="text" placeholder="namn" value={navItemName} onChange={handleNavItemName} />
        <input type="text" placeholder="url" value={navItemURL} onChange={handleNavItemURL} /><br />
        <button onClick={createNewNavItem}>skapa länk</button>




      </div>
    )

  }

  const renderContentEditor = () => {
    const x = config.pages.home.body.content.map(element => (
      <div>
        <input type="text" value={element.value} onChange={event => updateContentValue(event, 'home', element.id)} />
        <p>Färg</p>
        <ColorPicker 
          onChange={event => updateContentColor(event, 'home', element.id)}
          color={element.color}
        />
        <hr />
      </div>
    ))

    return (
      <div>
        { x }
        <p><strong>Lägg till ett element</strong></p>
        <p>...</p>
      </div>
    )
  }

  const renderError = () => {
    return <h2>404!</h2>
  }

  const renderPreview = () => {
    return (
      <S.PreviewContainer>
        { loading || <HomePage configuration={config} />}
      </S.PreviewContainer>
    )
  }
 
  const handleEditor = (event) => {
    setActiveEditor(event.target.value)
  }

  // ~~~~~~~~~~~ Editor methods ~~~~~~~~~~~~

  // Update headers

  const updateHeaderBackground = (color) => {
    const copy = { ...config }
    copy.header.background = color.hex
    setConfig(copy)
    setChangesMade(true)
  }

  const updateTitleColor = (color) => {
    const copy = { ...config }
    copy.header.heading.color = color.hex
    setConfig(copy)
    setChangesMade(true)
  }

  const updateTitleValue = (event) => {
    const copy = { ...config }
    copy.header.heading.value = event.target.value
    setConfig(copy)
    setChangesMade(true)
  }

  // Update nav

  const updateNavColor = (color) => {
    const copy = { ...config }
    copy.header.nav.color = color.hex
    setConfig(copy)
    setChangesMade(true)
  }

  const updateNavItemName = (event, id) => {
    const copy = { ...config }
    const item = copy.header.nav.items.find(item => item.id === id)
    item.name = event.target.value
    setConfig(copy)
    setChangesMade(true)
  }

  const updateNavItemURL = (event, id) => {
    const copy = { ...config }
    const item = copy.header.nav.items.find(item => item.id === id)
    item.url = event.target.value
    setConfig(copy)
    setChangesMade(true)
  }

  const createNavItem = (name, url) => {
    const copy = { ...config }
    const item = { id: copy.header.nav.items.length, name: name, url: url }
    copy.header.nav.items.push(item)
    setConfig(copy)
    setChangesMade(true)
  }

  const deleteNavItem = (event, id) => {
    const copy = { ...config }
    const index = copy.header.nav.items.findIndex(item => item.id === id)
    copy.header.nav.items.splice(index, 1)
    setConfig(copy)
    setChangesMade(true)
  }

  // Update content

  const updateContentValue = (event, page, id) => {
    const copy = { ...config }
    const element = copy.pages.home.body.content.find(x => x.id === id)
    element.value = event.target.value
    setConfig(copy)
    setChangesMade(true)
  }

  const updateContentColor = (color, page, id) => {
    const copy = { ...config }
    const element = copy.pages.home.body.content.find(x => x.id === id)
    element.color = color.hex
    setConfig(copy)
    setChangesMade(true)
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const renderSaveBtn = () => {
    return (
      <button onClick={save}>spara</button>
    )
  }

  const save = () => {
    const websites = JSON.parse(localStorage.getItem('websites'))
    websites[site] = config
    localStorage.setItem('websites', JSON.stringify(websites))
    setChangesMade(false)
  }

  
  return (
    <S.Container>
      { siteExist ? renderEditor() : renderError() }
      { renderPreview() }
    </S.Container>
  )
}

export default Editor

