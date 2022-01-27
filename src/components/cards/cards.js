import './cards.css'

function Cards(props) {
    return (
        <div>
            <div className="allArticle">
                <div className='card'>
                    <div className='imgdiv'>
                        <img src={props.image} alt="" />
                    </div>
                    <div className={props.stock <= 0 ? "bottomcard0" : "bottomcard" && props.stock == 1 ? "bottomcard1" : "bottomcard"}>
                        <h3>{props.name}</h3>
                        <p>Prix : {props.prix}€</p>
                        <p className='stocks'>Stock : {props.uni} unités</p>
                        <button onClick={props.achat} className={props.money < props.prix || props.stock <= 0 ? "none" : " "}>Acheter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards