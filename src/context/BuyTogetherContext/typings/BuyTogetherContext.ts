export type SelectedItem = {
  id: string
  seller: string
  quantity: number
  sellingPrice: number
  sellingPriceEvent: number
  listingPrice: number
  price: number
  isSelected: boolean
  allSkuVariationsSelected: boolean
  measurementUnit?: string
  unitMultiplier?: number
  category: string
  skuId: string
  ean: string
  variant: string
  priceIsInt: boolean
  name: string
  productId: string
  productRefId: string
  brand: string
  detailUrl: string
  imageUrl: string
  referenceId: string
  sellerName: string
}

export interface IBuyTogetherContext {
  selectedItems: SelectedItem[]
}
