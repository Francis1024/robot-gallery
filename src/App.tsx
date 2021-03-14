import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
// import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    document.title = `点击了${count}次`
  }, [count])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const responese = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )
      const data = await responese.json()
      setRobotGallery(data)
      setLoading(false)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人标题</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click!
      </button>
      <span>count:{count}</span>
      <ShoppingCart></ShoppingCart>
      {(error !== '' && error) && <div>网络错误：{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} key={r.id} />
          ))}
        </div>
      ) : (
        <div>loading 加载中...</div>
      )}
    </div>
  )
}

export default App
