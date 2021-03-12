import React from 'react'
import styles from './App.module.css'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

function App() {
  return (
    <div className={styles.app}>
      <ul>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} />
        ))}
      </ul>
    </div>
  )
}

export default App
