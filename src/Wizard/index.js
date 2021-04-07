import React from 'react'
import * as S from './style'
import config from '../config.js'


// Validation => no spaces in website name!!


function CreateWebsite() {
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('katt')
  const [step, setStep] = React.useState(1)
  const [showCreateButton, setShowCreateButton] = React.useState(false)

  const [animalName, setAnimalName] = React.useState('')
  const [breed, setBreed] = React.useState('unknown')

  const [showError, setShowError] = React.useState(false)
  const [showNamingError, setShowNamingError] = React.useState(false)

  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false)

  React.useEffect(() => {
    setupLocalStorage()
  }, [])

  const setupLocalStorage = () => {
    // Setup localStorage for storing websites in the browser.
    if (localStorage.getItem('websites') === null) {
      localStorage.setItem('websites', JSON.stringify({}))
    }

    // Setup localStorage for storing animals in the browser.
    if (localStorage.getItem('animals') === null) {
      localStorage.setItem('animals', JSON.stringify([]))
    }
  }

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAnimal = (event) => {
    setAnimal(event.target.value)
  }

  const handleAnimalName = (event) => {
    setAnimalName(event.target.value)
  }

  const handleBreed = (event) => {
    setBreed(event.target.value)
  }

  const handleCreateAnimal = (event) => {
    setShowCreateButton(true)

    // You want to setup localStorage here also.. in case it's removed..

    // Create animal!!!
    const cats = JSON.parse(localStorage.getItem('animals'))
    const obj = {
      name: animalName,
      breed: breed,
      animal: animal,
      site: name,
      id: cats.length
    }
    cats.push(obj)
    localStorage.setItem('animals', JSON.stringify(cats))

    setAnimalName('')
    setBreed('')
    setShowSuccessMessage(true)
  }

  const handleNext = (event) => {
    const websites = JSON.parse(localStorage.getItem('websites'))
    // See if name is not already taken..
    if (Object.keys(websites).includes(name)) {
      setShowError(true)
      return
    } else {
      setShowError(false)
    }

    // inga 
    if (name.indexOf(' ') > 0 || name.length < 1) {
      setShowNamingError(true)
      return
    } else {
      setShowNamingError(false)
    }
    setStep(2)
  }

  const handleCreateWebsite = (event) => {
    setStep(3)
    setShowCreateButton(false)

    // You want to setup localStorage here also.. in case it's removed..

    // Create website config!!
    const defaultConfig = config
    defaultConfig.name = name
    defaultConfig.header.heading.value = name
    defaultConfig.animal = animal
    defaultConfig.header.nav.items[0].url = `/${name}`
    defaultConfig.pages.home.body.content.push({ id: 1, font: 'arial', size: '16px', tag: 'p', color: '#333', value: animal === "cat" ? `Här är mina katter:` : `Här är mina hundar`})
    const websites = JSON.parse(localStorage.getItem('websites'))
    websites[name] = defaultConfig
    localStorage.setItem('websites', JSON.stringify(websites))
  }

  const handleCat = (event) => {
    setShowCreateButton(true)
  }

  const renderFirstStep = () => {
    return (
      <div>
        <p>Namn på webbplatsen (domän):</p>
        <input type="text" value={name} onChange={handleName} />

        <p>Vilket djur kommer din webbplats att kretsa kring? (stöd för flera i senare versioner..)</p>
        <select value={animal} onChange={handleAnimal}>
          <option value="katt">Katt</option>
          <option value="hund">Hund</option>
        </select>

        <br /><br />
        <button onClick={handleNext}>nästa</button>
      </div>
    )
  }

  const renderError = () => {
    return (
      <div>
        <S.Error>Namnet är redan taget! Prova ett annat.</S.Error>
      </div>
    )
  }

  const renderNamingError = () => {
    return (
      <div>
        <S.Error>Inga mellanslag i namnet!</S.Error>
      </div>
    )
  }

  const renderSuccessMessage = () => {
    return (
      <div>
        <S.Success>{`Din ${animal} skapades utan problem!`}</S.Success>
      </div>
    )
  }

  const renderDogBreeds = () => {
    return (
      <React.Fragment>
        <option value="unknown">Okänd</option>
        <option value="pudel">Pudel</option>
        <option value="tax">Tax</option>
        <option value="dalmatin">Dalmatin</option>
      </React.Fragment>
    )
  }

  const renderCatBreeds = () => {
    return (
      <React.Fragment>
        <option value="unknown">Okänd</option>
        <option value="huskatt">Huskatt</option>
        <option value="perser">Perser</option>
        <option value="ragdoll">Ragdoll</option>
      </React.Fragment>
    )
  }
  
  const renderSecondStep = () => {
    return (
      <div>
        <h2>Lägg till en {animal}</h2>
        { showSuccessMessage && renderSuccessMessage() }
        <p>Namn:</p>
        <input type="text" onChange={handleAnimalName} value={animalName} />
        <p>Ras</p>
        <select onChange={handleBreed} value={breed}>
           { animal === 'hund' ? renderDogBreeds() : renderCatBreeds() }
        </select>
        <p>osv...</p>
        <button onClick={handleCreateAnimal}>skapa {animal}</button>
      </div>
    )
  }

  const renderThirdStep = () => {
    return (
      <div>
        <p>Webbplatsen har skapats!</p>
        <a href={`/${name}`} >Gå till min webbplats</a>
      </div>
    )
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderFirstStep()
      case 2:
        return renderSecondStep()
      case 3:
        return renderThirdStep()
    }
  }
      
  
  return (
    <React.Fragment>
      <h1>Skapa en webbplats</h1>

      { showError && renderError() }
      { showNamingError && renderNamingError() }

      {renderStep()}

      { showCreateButton && <button onClick={handleCreateWebsite} style={{marginTop: '15px'}}>skapa webbplats</button>}
      

    </React.Fragment>
  )
}

export default CreateWebsite
