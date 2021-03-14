import React from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
// import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface Props {}
interface State {
  robotGallery: any[]
  count: number
}

class App extends React.Component<Props, State> {
  // 生命周期第一阶段：初始化
  constructor(props: Props) {
    super(props)

    this.state = {
      robotGallery: [],
      count: 0,
    }
  }

  // 在组件创建好DOM元素以后，挂载进入页面时候使用
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }))
  }

  // 生命周期第二阶段：更新

  // 在组件接收到一个新的prop（更新后）调用
  // componentWillReceiveProps
  // state getDerivedStateFromProps(nextProps, prevState){}
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextState.count !== this.state.count
  // }
  // 组件更新后使用
  componentDidUpdate(){}

  // 生命周期第三个阶段：销毁
  // 组件销毁后调用
  // 可以当作构造函数 destructor来使用
  componentWillUnmount(){}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>罗伯特机器人标题</h1>
        </div>
        <button
          onClick={() => {
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 }
              },
              () => {
                console.log('count', this.state.count)
              }
            )
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 }
              },
              () => {
                console.log('count', this.state.count)
              }
            )
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
