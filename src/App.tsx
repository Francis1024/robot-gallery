import React from 'react'
import styles from './App.module.css'
import logo from "./assets/images/logo.svg";
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人标题</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} key={r.id} />
        ))}
      </div>
    </div>
  )
}

export default App
