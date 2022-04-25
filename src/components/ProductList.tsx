import React from 'react'

export const ProductList: React.FunctionComponent<any> =({dataCat}, props) => {
  const product = dataCat.find((x: { id: any }) => x.id === props.match.params.id)
  if(!product) {
    return <div>Produto não existe</div>
  }
  return (
    <div>{dataCat.nome}</div>
  )
}
