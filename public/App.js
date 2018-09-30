import "./assets/images/favorites.svg"
import "./assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf"
import "./assets/fonts/Roboto/Roboto-Regular.ttf"
import "./assets/fonts/Roboto/Roboto-Light.ttf"
import "./assets/fonts/Roboto/Roboto-Medium.ttf"
import "./assets/fonts/Roboto/Roboto-Bold.ttf"
import "./assets/fonts/Roboto/Roboto-Black.ttf"
import './styles/index.scss'

const title = 'hello world'

function sayHello() {
  setTimeout(() => {
    console.log(title)
    sayHello()
  },3000)
}

sayHello()
