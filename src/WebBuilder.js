import React from 'react'
import * as S from './style'
import ColorPicker from './color-picker'
import ReactDOMServer from 'react-dom/server';

function WebBuilder() {
  const [html, setHTML] = React.useState("<p>Hello!</p>")
  const [title, setTitle] = React.useState("Default title")
  const [billboard, setBillboard] = React.useState({background: '#00D084'})

  const [menu, setMenu] = React.useState({background: '#f4f4f4', color: '#333', hoverColor: 'yellow'})

  const [menuItems, setMenuItems] = React.useState([{name: 'home', url: '#', id: 0}, {name: 'about', url: '#', id: 1}, {name: 'contact', url: '#', id: 2}, {name: 'test', url: '#', id: 3}])

  const [menuItemValue, setMenuItemValue] = React.useState("")


  const [webpage, setWebpage] = React.useState({ owner: 'anonymous', site: 'mysite', html: [] })


  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleBillboardBackground = (color) => {
    setBillboard({background: color.hex})
  }

  const handleMenuBackground = (color) => {
    setMenu(prev => ({background: color.hex, color: prev.color, hoverColor: prev.hoverColor}))
  }

  const handleMenuColor = (color) => {
    setMenu(prev => ({background: prev.background, color: color.hex, hoverColor: prev.hoverColor}))
  }

  const handleMenuItem = (event) => {
    setMenuItemValue(event.target.value)
    
  }

  const addMenuItem = () => {
    setMenuItems(prev => [...prev, { name: menuItemValue, url: '#', id: prev.length }])
    setMenuItemValue("")
  }

  const updateMenuItemName = (event, id) => {
    // copy state array to work with..
    const copy = [...menuItems]
    // find the object to update
    const obj = copy.find(item => item.id === id)
    // update the obj
    obj.name = event.target.value
    // update state
    setMenuItems(copy)
  }

  const updateMenuItemURL = (event, id) => {
    // copy state array to work with..
    const copy = [...menuItems]
    // find the object to update
    const obj = copy.find(item => item.id === id)
    // update the obj
    obj.url = event.target.value
    // update state
    setMenuItems(copy)
  }

  const deleteMenuItem = (event, id) => {
    const copy = [...menuItems]
    const obj = copy.find(item => item.id === id)
    const index = copy.indexOf(obj)

    if (index > -1) {
      copy.splice(index, 1);
    }

    setMenuItems(copy)

  }


  const renderMenuItems = () => {
    return menuItems.map(item => <S.TemplateMenuItem href={item.url}>{item.name}</S.TemplateMenuItem>)
  }

  const renderEditMenuItems = () => {
    return menuItems.map(item => (
      <div style={{marginBottom: "15px"}}>
        <input type="text" value={item.name} placeholder="name" onChange={ event => updateMenuItemName(event, item.id) } />
        <input type="text" value={item.url} placeholder="url" onChange={event => updateMenuItemURL(event, item.id)} />
        <button onClick={event => deleteMenuItem(event, item.id)}>ta bort</button>
      </div>
    ))
  }



  const renderView = (event) => {
    return (
      <S.TemplateContainer>
        <S.TemplateBillboard background={billboard.background}>
          <S.TemplateTitle>{title}</S.TemplateTitle>
        </S.TemplateBillboard>
        <S.TemplateMenu background={menu.background} color={menu.color} hoverColor={menu.hoverColor}>
          {renderMenuItems()}
        </S.TemplateMenu>
        <S.TemplateHeader>The index page..</S.TemplateHeader>
        <S.TemplateText>Some random text right here..</S.TemplateText>
      </S.TemplateContainer>
    )
  }
  


  const saveWebpage = (event) => {
    // Convert view to HTML string
    const htmlString = ReactDOMServer.renderToString(renderView())
    // Save the HTML string...
    setWebpage({ owner: 'anonymous', site: 'mysite', html: htmlString })

    console.log(htmlString)

    // Will the class name change all the time? ...
    // How to do with the styling..
  }


 
  return (
    <React.Fragment>
      <S.Container>
        <S.Left>
          Title: <input type="text" value={title} onChange={handleTitle} />

          <hr />

          Billboard background: <ColorPicker 
            onChange={handleBillboardBackground}
            color={billboard.background}
          />

          <hr /> 

          Menu background: <ColorPicker 
            onChange={handleMenuBackground}
            color={menu.background}
          />

          Menu item color: <ColorPicker 
            onChange={handleMenuColor}
            color={menu.color}
          />

          add menu item:
          <input type="text" value={menuItemValue} onChange={handleMenuItem} />
          <button onClick={addMenuItem}>add item</button>

          <hr />

          Menu items: <br />
          {renderEditMenuItems()}
          <button>spara</button>

          <hr />
          <button onClick={saveWebpage}>Spara webbsida</button>
        </S.Left>
        
        <S.Right>
          { renderView() }
        </S.Right>

      </S.Container>
    </React.Fragment>
  )
}

export default WebBuilder


/*

  To-do:
  - spara ner hela webbsidan (somehow) --> som ett objekt... när detta objekt sparas/modifieras, så ska den skapa/edit fil på webbservern..
  -  


*/



 // Click save, and it will write to file or something... --> save database, otherwise it will disappear when you restart app.. maybe
 // add localStorage, in case you go offline.. and as you click save, it will clear localStorage as well..

  // add all blocks as elements below
  // then target them, and do className? or any other css property?? updateColor (element), etc... 

  // varje template har sin egen uppsättning HTML elements, och tillhörande settings.. gör för en nu..


  // Ska gå att lägga till menu items..
  // 

