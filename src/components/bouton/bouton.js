import React from 'react'

export function bjr() {
    console.log("Bonjour");
}

export const Bouton = ({_type, _onclick, _click}) => {
  return (
    <button type={_type} onClick={_onclick}>{_click}</button>
  )
}
