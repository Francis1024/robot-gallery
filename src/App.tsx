import React from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface Props {}
interface State {
  robotGallery: any[]
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      robotGallery: [],
      count: 0,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>罗伯特机器人标题</h1>
        </div>
        <button
          onClick={() => {
            this.setState((preState,preProps)=>{return { count: preState.count + 1 }},()=>{
              console.log("count",this.state.count);
            })
            this.setState((preState,preProps)=>{return { count: preState.count + 1 }},()=>{
              console.log("count",this.state.count);
            })
           
          }}
          
        >
          Click!
        </button>
        <span>count:{this.state.count}</span>
        <ShoppingCart></ShoppingCart>
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} key={r.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
