import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../AppState'

import { useAddtoCart } from './AddtoCart'

interface RobotProps {
  id: number
  name: string
  email?: string
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddtoCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{value.username}</span>
      <button onClick={() => addToCart(id, name)}>添加到购物车</button>
    </div>
  )
}

export default RobotDiscount 
