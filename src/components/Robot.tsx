import React from 'react'
import styles from './Robot.module.css'
import { withAddCart, RobotProps } from './AddtoCart'

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart, value }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{value.username}</span>
      <button onClick={() => addToCart(id, name)}>添加到购物车</button>
    </div>
  )
}

export default withAddCart(Robot)
