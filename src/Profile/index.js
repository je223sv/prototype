
import React from 'react'
import { useParams } from 'react-router-dom'



const Profile = () => {
  const [animal, setAnimal] = React.useState({})

  const { id, name } = useParams()

  React.useEffect(() => {
    getAnimal()
  }, [])

  const getAnimal = () => {
    const animals = JSON.parse(localStorage.getItem('animals'))
    const animal = animals.find(x => x.id == id)
    setAnimal(animal)
  }

  const renderError = () => {
    return <h2>404</h2>
  }

  const renderProfile = () => {
    return (
      <h2>
        { animal.name}'s profil
      </h2>
    )
  }

  return (
    <div>
      { animal ? renderProfile() : renderError() }
    </div>
  )
}

export default Profile




