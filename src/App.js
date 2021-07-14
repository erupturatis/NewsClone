import Navbar from "./components/Navbar";
import "./App.css";
import Stire from "./components/Stire";
import PreviewStire from "./components/PreviewStire";
import React, {useState} from "react";
import { BrowserRouter, Switch,Route } from 'react-router-dom'



function App() {
  const [stiri, setstiri] = useState([
    {
        title:"Mi-e silă! E total inacceptabi! Prințul William a stârnit o avalanșă de critici și e pus la zid după postarea de ieri",
        img:"https://cdn.discordapp.com/attachments/761158057379364865/862394125600555039/image0.png",
        article:`În 2020, defilarea de 14 Iulie a fost anulată pentru prima dată după Al Doilea Război Mondial, fiind înlocuită cu o ceremonie în format redus în Place de la Concorde.

        "Câştigăm viitorul" este tema ediţiei din 2021, cu dublă referire la bătălia sanitară purtată de francezi, dar şi la pregătirea necesară a armatei pentru "angajamente mai dure, de înaltă intensitate, sprijinite pe materiale de înaltă tehnologie", după cum a explicat guvernatorul militar al Parisului, generalul Christophe Abad.
        
        Anul acesta, pe celebrul bulevard parizian Champs-Elysées au revenit militari, drapele şi blindate, dar accesul spectatorilor a fost limitat, cei prezenţi fiind obligaţi să prezinte un permis sanitar şi să poarte mască. Asistenţa a fost redusă la 10.000 de persoane, faţă de 25.000 în vremuri normale. `,
        editor:"bobyius",
        etichete:["cafeluat","internet","perscaol"],
        id:"1",
        date:"14.07.2021 15:43",
        descriptionPhoto:"nu situ ce",
        highlight:"După pauza de anul trecut provocată de pandemie, Franţa a reluat miercuri, tradiţia paradei militare de Ziua Naţională, însă prudenţa continuă să fie prezentă într-un moment în care ţara încearcă să evite un al patrulea val epidemic cu variantă Delta."
    },
    {
        title:"alt tiea btlore ipsum ceva",
        img:"https://cdn.discordapp.com/attachments/761158057379364865/862394125600555039/image0.png",
        article:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        editor:"2obyius",
        etichete:["cafedawat","intergaeaaat","paaaol"],
        id:"2",
        date:"12.04.2020 145:43",
        descriptionPhoto:"zalex at hisack",
        highlight:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and t"
    }
  ])
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      
        <Route exact path="/stiri/:id" >
          <Stire stiri = {stiri}/>
        </Route>
        <Route exact path="/">
        <div>
            {
              stiri.map(stire => (
                <div>
                  <PreviewStire id={stire.id} title={stire.title} img={stire.img} article={stire.article} editor={stire.editor} etichete={stire.etichete}  />
                </div>
              ))
            }
            </div>

        </Route> 
            
    
        

      </BrowserRouter>
    </div>
  );
}

export default App;
