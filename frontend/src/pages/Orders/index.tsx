import "./styles.css"

function Orders() {
    const order = {
        id: 1,
        price: 2699.99,
        date: "Mar 13, 2022",
    };

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
        <div className="market-orders-container">
            <div className="market-orders-list-container">
                <img className="market-orders-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <div className="market-orders-card-info-container">
                    <h3>Order ID: {order.id}</h3>
                    <h3>Order Date: {order.date}</h3>
                    <h3>Total: R$ {order.price}</h3>
                </div>
            </div>
            <div className="market-orders-list-container">
            <img className="market-orders-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <div className="market-orders-card-info-container">
                    <h3>Order ID: {order.id}</h3>
                    <h3>Order Date: {order.date}</h3>
                    <h3>Total: R$ {order.price}</h3>
                </div>
            </div>
            <div className="market-orders-list-container">
            <img className="market-orders-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <div className="market-orders-card-info-container">
                    <h3>Order ID: {order.id}</h3>
                    <h3>Order Date: {order.date}</h3>
                    <h3>Total: R$ {order.price}</h3>
                </div>
            </div>
            <div className="market-orders-list-container">
            <img className="market-orders-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <img className="market-orders-middle-card-image" src={item.image} alt={item.title} />
                <div className="market-orders-card-info-container">
                    <h3>Order ID: {order.id}</h3>
                    <h3>Order Date: {order.date}</h3>
                    <h3>Total: R$ {order.price}</h3>
                </div>
            </div>
        </div>
    );
}

export default Orders;