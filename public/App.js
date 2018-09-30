import './styles/index.scss'

const title = 'hello world'

function sayHello() {
  setTimeout(() => {
    console.log(title)
    sayHello()
  },3000)
}

sayHello()
