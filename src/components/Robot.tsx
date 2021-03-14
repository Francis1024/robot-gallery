import React, { useContext } from 'react'
import { appContext } from '../index'
import styles from './Robot.module.css'

interface RobotProps {
  id: number
  name: string
  email?: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)

  return (

    
    // <appContext.Consumer>
    //   {(value) => {
    //     return (
    //       <div className={styles.cardContainer}>
    //         <img src={`https://robohash.org/${id}`} alt="robot" />
    //         <h2>{name}</h2>
    //         <p>{email}</p>
    //         <span>{value.username}</span>
    //       </div>
    //     )
    //   }}
    // </appContext.Consumer>

    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{value.username}</span>
    </div>
  )
}

export default Robot
