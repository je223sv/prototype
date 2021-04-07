import React from "react"
import * as S from './style.js'

import { useParams } from 'react-router-dom'


const HomePage = (props) => {
  const [siteExist, setSiteExist] = React.useState(false)
  const [config, setConfig] = React.useState({})
  const [inPreview, setInPreview] = React.useState(false)

  const { site } = useParams()

  React.useEffect(() => {
    if (!!props.configuration) {
      setSiteExist(true)
      setConfig(props.configuration)
      setInPreview(true)
    } else {
      getConfig()
    }
  }, [])

  
  // WILL THROW A FIT IF THERE IS NO LOCALSTORAGE WEBSITE.. SO CREATE IT HERE TOO JUST IN CASE..


  // Get config if site exist, and render page, otherwise render 404!!
  const getConfig = () => {
    const websites = JSON.parse(localStorage.getItem('websites'))

    if (Object.keys(websites).includes(site)) {
      setSiteExist(true)
      setConfig(websites[site])
    }
  }


  const renderHeader = () => {
    return (
      <div>
        <S.PageTitle color={config.header.heading.color}>{config.header.heading.value}</S.PageTitle>
      </div>
    )
  }

  // Nav should be rendered same on all pages.... you are duplicating right now..
  const renderNav = () => {
    const items = config.header.nav.items.map(item => <a style={{color: config.header.nav.color}} href={item.url}><li>{item.name}</li></a>)

    return (
      <S.PageNav>
        <ul>
          { items }
        </ul>
      </S.PageNav>
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
    const elements = config.pages.home.body.content.map(element => renderElement(element)) // hard-coded

    return (
      <React.Fragment>
        { elements }
        <ul>{ renderAnimals() }</ul>
      </React.Fragment>
    )
  }


  const renderAnimals = () => {
    const animals = JSON.parse(localStorage.getItem('animals'))
    const animalsOfSite = animals.filter(animal => animal.site === site)

    const animalElements = animalsOfSite.map(animal => <li><a href={`/profil/${animal.id}/${animal.name}`}>{animal.name}</a></li>)

    return animalElements
  }

  // Render page based on config...
  const renderPage = () => {
    return (
      <div>
        <S.PageHeader background={config.header.background}>
          { renderHeader() }
          { renderNav() }
        </S.PageHeader>
        
        <S.BodyContainer>
          { renderBody() }
        </S.BodyContainer>
      </div>
    )
  }

  const renderError = () => {
    return (
      <p>404!</p>
    )
  }

  const renderTopMenu = () => {
    
    const editor = <a href={`/${site}/editor`}>EDITORN</a>
    const live = <a href={`/${site}`}>LIVE</a>

    return (
      <S.TopMenu>
        { inPreview ? live : editor }
      </S.TopMenu>
    )
  }

  return (
    <React.Fragment>
      { renderTopMenu() }
      { siteExist ? renderPage() : renderError() }
    </React.Fragment>
  )
}

export default HomePage