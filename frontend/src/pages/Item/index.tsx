import ItemScore from 'components/ItemScore';
import './styles.css';

function Item() {
    const item = {
        id: 1,
        image: "https://images-americanas.b2w.io/produtos/01/00/img/3068486/0/3068486027_1SZ.jpg",
        title: "Smart TV 50 Crystal UHD Samsung 4k 50AU8000",
        price: 2699.99,
        priceOld: 2999.99,
        count: 2,
        score: 4.5
    };

    return (
        <div className="market-item-container">
            <div className="market-item-form-container">
                <div className="market-item-form-row-container">
                    <img className="market-item-card-image" src={item.image} alt={item.title} />
                </div>

                <div className="market-item-form-row-info-container">
                    <h3>{item.title}</h3>
                    <ItemScore />
                    <h1>R$ {item.priceOld}</h1>
                    <h3>R$ {item.price}</h3>
                    <form className="market-form">
                        <div className="market-form-btn-container">
                            <button type="submit" className="btn btn-primary market-btn">Buy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Item;