import './panier.css'

function Panier(props) {
    return(
        <div>
            <div>
                <div className={props.nbr == 0 ? "rien" : "buycard"}>
                    <img src={props.buyimg} alt="" />
                    <p>Bouteille de {props.buyname} : {props.nbr} </p>
                    <button onClick={props.remettre}>Rendre</button>
                </div>
            </div>
        </div>
    )
}

export default Panier