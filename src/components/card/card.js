import React from 'react'

export const Card = ({_nom, _prenom, _age, _bgColor, _height, _width, _img}) => {
  return (
    <div class='card flex flex-col justify-center items-center' style={{backgroundColor : _bgColor, width : _width, height : _height}}>
        <h1 class="text-2xl">{_nom}</h1>
        <h2 class="text-xl">{_prenom}</h2>
        <p class="text-lg">{_age}</p>
        <img src={_img} alt='photo' class="w-90"></img>
    </div>
  )
}
