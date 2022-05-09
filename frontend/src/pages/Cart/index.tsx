import ItemCard from "components/ItemCard";
import "./styles.css"

function Cart() {
    const item = {
        id: 1,
        image: "https://images-americanas.b2w.io/produtos/01/00/img/3068486/0/3068486027_1SZ.jpg",
        title: "Smart TV 50 Crystal UHD Samsung 4k 50AU8000",
        price: 2699.99,
        priceOld: 2999.99,
        count: 2,
        score: 4.5
    };

    const countItens = 3;
    const sumPrices = 3 * 2699.99;

    return (
        <div className="market-cart-container">
            <div className="market-cart-form-container">
                <div className="market-cart-form-column-container">
                    <div className="market-cart-item-container">
                        <img className="market-cart-card-image" src={item.image} alt={item.title} />
                        <div className="market-cart-card-info">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="market-cart-card-price">
                            <h3>R$ {item.price}</h3>
                        </div>
                    </div>
                    <div className="market-cart-item-container">
                        <img className="market-cart-card-image" src={item.image} alt={item.title} />
                        <div className="market-cart-card-info">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="market-cart-card-price">
                            <h3>R$ {item.price}</h3>
                        </div>
                    </div>
                    <div className="market-cart-item-container">
                        <img className="market-cart-card-image" src={item.image} alt={item.title} />
                        <div className="market-cart-card-info">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="market-cart-card-price">
                            <h3>R$ {item.price}</h3>
                        </div>
                    </div>
                </div>
                <div className="market-cart-form-summary-info-container">
                    <h3>Summary</h3>
                    <h3>{countItens} Itens</h3>
                    <h3>Total Price: R$ {sumPrices.toFixed(2)}</h3>
                    <form className="market-form">
                        <div className="market-form-btn-container">
                            <button type="submit" className="btn btn-primary market-btn">Buy Now</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Cart;