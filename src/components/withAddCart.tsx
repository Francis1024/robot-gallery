import React, { useContext } from 'react'
import { appContext, appSetStateContext } from '../AppState'
import { AppStateValue } from '../AppState'

export interface RobotProps {
  id: number
  name: string
  email?: string
  addToCart: (id: number, name: string) => void
  value: AppStateValue
}

export const withAddCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  // class ChildComponent extends React.Component {}

  return (props) => {
    const setState = useContext(appSetStateContext)
    const value = useContext(appContext)

    const addToCart = (id, name) => {
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
      <ChildComponent
        {...props}
        addToCart={addToCart}
        value={value}
      ></ChildComponent>
    )
  }
}
