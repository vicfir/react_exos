import { Title } from './components/title/title';
import { Picture } from './components/picture/picture';
import { Info } from './components/info/info';
import { Imc } from './components/imc/imc';

import { Bouton } from './components/bouton/bouton';
import { bjr } from "./components/bouton/bouton";

import { Card } from './components/card/card';

function App() {
  return (
    <div className="App">
      <Title _paramH="Voici le titre" _paramP="voici le paragraphe"/>
      <Picture _img1="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png" _img2="./img/2kuh6f.jpg"/>
      <Info _src={"https://www.netcost-security.fr/wp-content/uploads/2021/11/1636044306_Lhistoire-de-GigaChad-lultra-masculin-mi-meme-mi-legende-urbaine-758x427.jpg"} _nom={"Victor"} _age={27 + "ans"} _taille={187 +"cm"}/>
      <Imc _poids={75} _taille={1.85}/>
      <Bouton _type={"button"} _onclick={bjr} _click={"bonjour"}/>
      <Bouton _type={"submit"} _click={"click"}/>

      <div class='cards flex items-center'>
        <Card _nom={"Firkowski"} _prenom={'Victor'} _age={27} _bgColor={"brown"} _width={"200px"} _height={"300px"} _img={"https://i.makeagif.com/media/6-22-2015/i4iRQ1.gif"}/>
        <Card _nom={"Sensei"} _prenom={'Kadri'} _age={25} _bgColor={"silver"} _width={"300px"} _height={"400px"} _img={"https://uvn-brightspot.s3.amazonaws.com/assets/vixes/k/krillin-6-puntos.gif"}/>
        <Card _nom={"Sensei du Sensei"} _prenom={'Elias'} _age={28} _bgColor={"gold"} _width={"400px"} _height={"500px"} _img={"https://media.tenor.com/-Rug48uNPHsAAAAC/fwpraj-fwp.gif"}/>
      </div>
      
    </div>
  );
}

export default App;
