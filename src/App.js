import { useState } from 'react';
import './App.css'
import Cards from './components/cards/cards'
import Panier from './components/panier/panier'

function App() {
  

  const [objet, setObjet] = useState([
    {
        nom : "Coca Cola",
        prix : 1,
        unite : 5,
        quantite: 0,
        img : "https://freepikpsd.com/file/2019/10/coca-bouteille-png-3-Transparent-Images.png"
    },
    {
        nom: "Fanta",
        prix: 1.5,
        unite: 5,
        quantite: 0,
        img : "https://familov.com/uploads/products/FAMILOV_BGOV2FCRNQ.png"
    },
    {
        nom: "Ice Tea",
        prix: 2,
        unite: 5,
        quantite: 0,
        img : "https://www.lipton.com/content/dam/unilever/lipton_international/global/active_in-use_products_/ok_25031_pepsico_lipton_iced_tea_peach_340_ml_c1c1_fr-1951783-png.png"
    }
])


  const [argent, setArgent] = useState(20)
  const acheter = (produit) => {
    setArgent(argent - produit.prix)
    produit.unite -= 1
    produit.quantite += 1
  }
  const rendre = (prod) => {
    setArgent(argent + prod.prix)
    prod.unite += 1
    prod.quantite -= 1
  }

  return (
    <div className="App">
      <h1>Mon argent : {argent}€</h1>
      <div className='cardsmap'>
        {objet.map((objet) => (<Cards image={objet.img} name={objet.nom} prix={objet.prix} uni={objet.unite} achat={()=>acheter(objet)} money={argent} stock={objet.unite} />))}
      </div>
      <div>
        <h3>Panier :</h3>
        <hr />
        <div className='buyobjet'>
          {objet.map((objet) => (<Panier buyimg={objet.img} buyname={objet.nom} nbr={objet.quantite} remettre={() => rendre(objet)} />) )}
        </div>
      </div>
    </div>
  );
}

export default App;
