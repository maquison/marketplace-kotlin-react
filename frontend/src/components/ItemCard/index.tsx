import ItemScore from "components/ItemScore";
import { Link } from "react-router-dom";
import { Item } from "types/item";
import './styles.css';

type Props = {
    item: Item;
}

function ItemCard({ item } : Props) {
    return (
        <div><Link to={`/item/${item.id}`}>
            <img className="market-item-list-card-image" src={item.image} alt={item.name} />
            <div className="market-item-list-card-bottom-container">
                <h3>{item.name}</h3> 
                <ItemScore />
                <h5>R$ {item.previousPrice}</h5> 
                <h4>R$ {item.currentPrice}</h4>      
            </div>
            </Link>
        </div>
    );
}

export default ItemCard; 