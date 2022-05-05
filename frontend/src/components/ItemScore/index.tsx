import ItemStars from "components/ItemStars";
import './styles.css'

function ItemScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="market-score-container">
            <p className="market-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <ItemStars />
            <p className="market-score-count">{count} reviews</p>
        </div>
    );
}

export default ItemScore; 