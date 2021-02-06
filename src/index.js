// @ts-nocheck
import _ from 'lodash'
import './style.scss'
import Logo from './logo.jpg'
import Data from './components/my-component/data.xml'
import Notes from './components/my-component/data.csv'
import toml from './components/my-component/data.toml';
import yaml from './components/my-component/data.yaml';
import json from './components/my-component/data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

const component = () => {
  const elem = document.createElement('div')

  // lodash is imported
  elem.innerHTML = _.join(['Hello', 'webpack'], ' ')
  elem.classList.add('hello')

  // add image to existing div
  const myLogo = new Image()
  myLogo.src = Logo
  elem.appendChild(myLogo)

  console.log(Data)
  console.log(Notes)

  return elem
}

document.body.appendChild(component())