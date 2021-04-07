import React from 'react'
import WebBuilder from './WebBuilder.js'
import * as S from './style'

import Builder from './Builder'
import CreateWebsite from './Wizard'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage.js'
import Profile from './Profile'

import Editor from './Editor/index2.js'




// import ReactDOMServer from 'react-dom/server';


// const renderToString = () => {
//   const html = renderToString(<WebBuilder />)
//   console.log(html)
// }




function App() {

  const routes = ''

  // <Route path="/mysite" component={HomePage} />
  // <Route path="/mycatsite" component={HomePage} />
  // <Route path="/mydogsite" component={HomePage} />

  return (
    <React.Fragment>

      <BrowserRouter>
        <BrowserRouter>
          <Route exact path="/" component={CreateWebsite} />
          <Route exact path="/:site" component={HomePage} />
          <Route path="/:site/editor" component={Editor} />
          <Route path="/profil/:id/:name" component={Profile} />
        </BrowserRouter>
      </BrowserRouter>

      {/* <CreateWebsite /> */}
      {/* <Builder /> */}
      {/* <WebBuilder /> */}
      {/* <button onClick={renderToString}>html</button> */}
    </React.Fragment>
  )
}

export default App
