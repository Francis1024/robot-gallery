import React from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { appContext } from '../AppState'
interface Props {}
interface State {
  isOpen: boolean
}

class ShopingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 鼠标点击的DOM元素
    console.log('e.target', e.target)
    // 绑定事件的DOM元素
    console.log('e.currentTarget', e.currentTarget)

    // 将鼠标点击的DOM元素 转换为HTMLElement 对象，进行判断
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }
  }

  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <FiShoppingCart />
                <span>购物车 {value.shopingCart.items.length}(件)</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: this.state.isOpen ? 'block' : 'none' }}
              >
                <ul>
                  {value.shopingCart.items.map((i, index) => (
                    <li key={i.id + index}>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </appContext.Consumer>
    )
  }
}

export default ShopingCart
