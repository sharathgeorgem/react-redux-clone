// Get an element by ID
const domRoot = document.getElementById('root')
// Create a new element by a tag name
const domInput = document.createElement('input')
// Set properties
domInput['type'] = 'text'
domInput['value'] = 'Hi world'
domInput['className'] = 'my-class'
// Listen to events
domInput.addEventListener('change', e => {
  console.log(e.target.value)
})
// Create a text node
const domText = document.createTextNode('')
domText['nodeValue'] = 'Foo'
domRoot.appendChild(domInput)
domRoot.appendChild(domText)
