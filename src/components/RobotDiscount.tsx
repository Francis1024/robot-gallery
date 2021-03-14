import React from 'react'
import styles from './Robot.module.css'
import { withAddCart, RobotProps } from './withAddCart'

const RobotDiscount: React.FC<RobotProps> = ({
  id,
  name,
  email,
  addToCart,
  value,
}) => {
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

export default withAddCart(RobotDiscount)
