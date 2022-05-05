import ItemScore from "components/ItemScore";
import { Link } from "react-router-dom";
import './styles.css';

function ItemCard() {

    const item = {
        id: 1,
        image: "https://images-americanas.b2w.io/produtos/01/00/img/3068486/0/3068486027_1SZ.jpg",
        title: "Smart TV 50 Crystal UHD Samsung 4k 50AU8000",
        price: 2699.99,
        priceOld: 2999.99,
        count: 2,
        score: 4.5,
        orders: 2,
        descripition: "",
        review: ""
    };

    return (
        <div><Link to={`/item/${item.id}`}>
            <img className="market-item-list-card-image" src={item.image} alt={item.title} />
            <div className="market-item-list-card-bottom-container">
                <h3>{item.title}</h3> 
                <ItemScore />
                <h5>R$ {item.priceOld}</h5> 
                <h4>R$ {item.price}</h4>      
            </div>
            </Link>
        </div>
    );
}

export default ItemCard; 