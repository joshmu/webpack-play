import _ from 'lodash'

const component = () => {
  const elem = document.createElement('div')

  // lodash is imported
  elem.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return elem
}

document.body.appendChild(component())