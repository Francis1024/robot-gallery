import React, { useContext } from 'react'
import { appContext, appSetStateContext } from '../AppState'
import styles from './Robot.module.css'

interface RobotProps {
  id: number
  name: string
  email?: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)

  const addCart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shopingCart: {
            items: [...state.shopingCart.items, { id, name }],
          },
        }
      })
    }
  }

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
      <button onClick={addCart}>添加到购物车</button>
    </div>
  )
}

export default Robot
