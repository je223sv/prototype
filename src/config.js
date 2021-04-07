

// Might be easier in the future to divide the configs to specific pages, and have a main config with main stuff such as routes, userId, etc.. ??
// not sure tho.. because I would have to do multiple database calls for that... so might just be better to have one big config file..
// I could have a pages key, and simply use that key to reduce the size of the object...


// Should config be like this instead:
/*

    by using parts as keys, you won't be duplicating them...

    config = {
      header: {
        home: {
          background: 'yellow',
          heading: [{ content: '', color: '', font: '', size: ''}, { content: '', color: '', font: '', size: ''}],
          paragraph: [{ content: '', color: '', font: '', size: ''}, { content: '', color: '', font: '', size: ''}]
        },
        about: {},
        contact: {}
      },
      nav: {
        home: {},
        about: {},
        contact: {}
      },
      body: {
        home: {},
        about: {},
        contact: {}
      }
    }
*/

// const configTwo = {
//   header: { // support for not heaving a header either...
//     home: {
//       background: 'yellow',
//       headings: [{ id: 0, content: 'Main page', color: 'blue', font: 'arial', size: '24px'}],
//       paragraphs: [{ id: 0, content: 'Some random text', color: 'purple', font: 'arial', size: '14px'}]
//     },
//     about: {
//       background: 'yellow',
//       headings: [{ id: 0, content: 'Main page', color: 'blue', font: 'arial', size: '24px'}],
//       paragraphs: [{ id: 0, content: 'Some random text', color: 'purple', font: 'arial', size: '14px'}]
//     },
//     body: {
//       background: 'yellow',
//       headings: [{ id: 0, content: 'Main page', color: 'blue', font: 'arial', size: '24px'}],
//       paragraphs: [{ id: 0, content: 'Some random text', color: 'purple', font: 'arial', size: '14px'}]
//     }
//   },
//   nav: { // all pages will use the same navigation.. so this settings will be available in all pages in the editor..
//     background: 'blue',
//     color: 'yellow',
//     items: [{ id: 0, name: 'home', url: '#' }, { id: 1, name: 'about', url: '#' }, { id: 2, name: 'contact', url: '#' }]
//   },
//   body: {
//     home: {
//       backogrund: 'green',
//       headings: [{ id: 0, content: 'Main page', color: 'blue', font: 'arial', size: '24px'}],
//       paragraphs: [{ id: 0, content: 'Some random text', color: 'purple', font: 'arial', size: '14px'}]
//     }
//   }
// }



// const config = {
//   user: 'anonymous',
//   userID: 0,
//   routes: {
//     home: { path: '/', component: 'Home' },
//     about: { path: '/om', component: 'About' },
//     contact: { path: '/kontakt', component: 'Contact' }
//   },
//   nav: {
//     background: '#356',
//     color: 'blue',
//     items: [
//       { id: 0, name: 'home', url: '#' },
//       { id: 1, name: 'about', url: '#' },
//       { id: 2, name: 'contact', url: '#' }
//     ]
//   },
//   home: {
//     header: {
//       background: 'blue',
//       heading: 'Home',
//       color: 'yellow'
//     },
//     body: {
//       background: 'red',
//       color: 'white',
//       heading: 'Random heading',
//       content: 'Some random content',
//     }
//   },
//   about: {
//     header: {
//       background: 'blue',
//       heading: 'About us!!!',
//       color: 'yellow'
//     },
//     body: {
//       background: 'red',
//       color: 'white',
//       heading: 'Random heading',
//       content: 'Some random content',
//     }
//   },
//   contact: {
//     header: {
//       background: 'blue',
//       heading: 'Contact',
//       color: 'yellow'
//     },
//     body: {
//       background: 'red',
//       color: 'white',
//       heading: 'Random heading',
//       content: 'Some random content',
//     }
//   }
// }



// const configx = {
//   user: 'anonymous',
//   userID: 0,
//   routes: {
//     home: { path: '/', component: 'Home' },
//     about: { path: '/om', component: 'About' },
//     contact: { path: '/kontakt', component: 'Contact' }
//   },
//   home: {
//     header: {
//       background: 'blue',
//       heading: 'Home',
//       color: 'yellow'
//     },
//     nav: {
//       background: 'yellow',
//       color: 'blue',
//       items: [
//         { id: 0, name: 'home', url: '#'},
//         { id: 1, name: 'about', url: '#' },
//         { id:2, name: 'contact', url: '#'}
//       ]
//     },
//     body: {
//       background: 'red',
//       color: 'white',
//       heading: 'Random heading',
//       content: 'Some random content',
//     }
//   },
//   about: {
//     header: {
//       background: 'blue',
//       heading: 'About',
//       color: 'yellow'
//     },
//     nav: {
//       background: 'yellow',
//       color: 'blue',
//       items: {
//         0: { name: 'home', url: '#' },
//         1: { name: 'about', url: '#' },
//         2: { name: 'contact', url: '#' }
//       }
//     },
//     body: {
//       background: 'red',
//       color: 'white',
//       heading: 'Random heading',
//       content: 'Some random content',
//     }
//   },
//   contact: {
//     header: {
//       background: 'blue',
//       heading: 'About',
//       color: 'yellow'
//     },
//     nav: {
//       background: 'yellow',
//       color: 'blue',
//       items: {
//         0: { name: 'home', url: '#' },
//         1: { name: 'about', url: '#' },
//         2: { name: 'contact', url: '#' }
//       }
//     },
//     body: {
//       background: 'red',
//       color: 'white',
//       heading: 'Random heading',
//       content: 'Some random content',
//     }
//   }
// }


// Home, About, Contact, Animal, Animals,  <-- pre-defined Components that you can add.. and a Custom component..



// Ha bara stöd för en sida just nu!! enklare...

// Is it possible to add pages, and is it possible to add elements (content) ????

const config = {
  name: '',
  animal: '',
  theme: 'default',
  header: {
    background: 'MediumSeaGreen',
    logo: '',
    heading: {
      font: 'arial',
      size: '14px',
      color: '#fff',
      value: ''
    },
    nav: {
      color: '#fff',
      items: [
        { id: 0, name: 'home', url: '#' },
      ]
    }
  },
  pages: { // when you add a page, you add an obj like these..  cats: { billboard: { show: false }, body: { content: []}}
    home: {
      billboard: {
        show: true,
        heading: 'Welcome to my site!',
        paragraph: 'The best site in the world.'
      },
      body: {
        background: '#fff',
        content: [ // array, so you can change order of these with drag-and-drop in the future.. but you maybe want the size, and color to be set for all of these, instead of individually.. tag determine how the content is rendered to the page...
          { id: 0, font: 'arial', size: '18px', tag: 'h2', color: '#333', value: "Välkommen till min sida!"},
          // { id: 1, font: 'arial', size: '16px', tag: 'p', color: '#333', value: "Some text!"},
          // { id: 2, tag: 'img', src: '/my-cat.png', alt: 'my cat', width: '200px', height: '200px' },
        ]
      }
    },
    about: {
      billboard: {
        show: false,
        heading: '',
        paragraph: ''
      },
      body: {
        background: '#fff',
        content: [
          { id: 0, font: 'arial', size: '18px', tag: 'h2', color: '#333', value: "About us!"},
          { id: 1, font: 'arial', size: '16px', tag: 'p', color: '#333', value: "We are cool ppl!"},
        ]
      }
    },
  }
}

export default config
