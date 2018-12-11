function render (element, parentDOM) {
  const { type, props } = element

  // Create DOM element
  const isTextElement = type === 'TEXT ELEMENT'
  const dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type)

  const isListener = name => name.startsWith('on')
  Object.keys(props).filter(isListener).forEach(name => {
    const eventType = name.toLowerCase().substring(2)
    dom.addEventListener(eventType, props[name])
  })

  const isAttribute = name => !isListener(name) && name !== 'children'
  Object.keys(props).filter(isAttribute).forEach(name => {
    dom[name] = props[name]
  })

  const childElements = props.children || []
  childElements.forEach(childElement => render(childElement, dom))

  parentDOM.appendChild(dom)
}
