import React, { createContext, useContext, useReducer } from 'react'

import type {
  IBuyTogetherContext,
  SelectedItem,
} from './typings/BuyTogetherContext'

const BuyTogetherContext = createContext<IBuyTogetherContext | undefined>(
  undefined
)

const BuyTogetherDispatch = createContext<Dispatch | undefined>(undefined)

type Dispatch = (action: Action) => void

type SetSelectedItems = {
  type: 'SET_SELECTED_ITEMS'
  args: {
    selectedItems: SelectedItem
  }
}

type RemoveSelectedItem = {
  type: 'REMOVE_SELECTED_ITEM'
  args: {
    skuId: string
  }
}

type UpdateIsSelected = {
  type: 'UPDATE_IS_SELECTED'
  args: {
    skuId: string
    isSelected: boolean
  }
}

type UpdateQuantity = {
  type: 'UPDATE_QUANTITY'
  args: {
    skuId: string
    quantity: number
  }
}

type AllSkuVariationsSelected = {
  type: 'ALL_SKU_VARIATIONS_SELECTED'
  args: {
    skuId: string
    allSkuVariationsSelected: boolean
  }
}

type Action =
  | SetSelectedItems
  | RemoveSelectedItem
  | UpdateIsSelected
  | RemoveSelectedItem
  | UpdateQuantity
  | AllSkuVariationsSelected

function reducer(
  state: IBuyTogetherContext,
  action: Action
): IBuyTogetherContext {
  switch (action.type) {
    case 'SET_SELECTED_ITEMS': {
      return {
        ...state,
        selectedItems: [action.args.selectedItems, ...state.selectedItems],
      }
    }

    case 'REMOVE_SELECTED_ITEM': {
      const updatedSelectedItems = state.selectedItems.filter(
        (selectedItem) => selectedItem.id !== action.args.skuId
      )

      return {
        ...state,
        selectedItems: updatedSelectedItems,
      }
    }

    case 'UPDATE_IS_SELECTED': {
      const updatedSelectedItems = state.selectedItems.map((item) => {
        if (item.id === action.args.skuId) {
          return {
            ...item,
            isSelected: action.args.isSelected,
          }
        }

        return item
      })

      return {
        ...state,
        selectedItems: updatedSelectedItems,
      }
    }

    case 'UPDATE_QUANTITY': {
      const updatedSelectedItems = state.selectedItems.map((item) => {
        if (item.id === action.args.skuId) {
          return {
            ...item,
            quantity: action.args.quantity,
          }
        }

        return item
      })

      return {
        ...state,
        selectedItems: updatedSelectedItems,
      }
    }

    case 'ALL_SKU_VARIATIONS_SELECTED': {
      const updatedSelectedItems = state.selectedItems.map((item) => {
        if (item.id === action.args.skuId) {
          return {
            ...item,
            allSkuVariationsSelected: action.args.allSkuVariationsSelected,
          }
        }

        return item
      })

      return {
        ...state,
        selectedItems: updatedSelectedItems,
      }
    }

    default:
      return state
  }
}

const BuyTogetherProvider = ({ children }: any) => {
  const initialState: IBuyTogetherContext = {
    selectedItems: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BuyTogetherContext.Provider value={state}>
      <BuyTogetherDispatch.Provider value={dispatch}>
        {children}
      </BuyTogetherDispatch.Provider>
    </BuyTogetherContext.Provider>
  )
}

const useBuyTogetherContext = () => {
  const buyTogetherContext = useContext(BuyTogetherContext)

  if (!buyTogetherContext) {
    throw new Error(
      'useBuyTogether has to be used within <BuyTogetherContext.Provider>'
    )
  }

  return buyTogetherContext
}

const useBuyTogetherDispatch = () => {
  const buyTogetherDispatch = useContext(BuyTogetherDispatch)

  if (!buyTogetherDispatch) {
    throw new Error(
      'useBuyTogether has to be used within <BuyTogetherDispatch.Provider>'
    )
  }

  return buyTogetherDispatch
}

export {
  BuyTogetherContext,
  useBuyTogetherContext,
  BuyTogetherDispatch,
  useBuyTogetherDispatch,
  BuyTogetherProvider,
}
