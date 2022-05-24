import "./styles.css"

function Payment() {
    const user = {
        id: 1,
        name: "Juarez de Lima Meneses Filho",
        phone: "85992000000",
    };

    const address = {
        id: 1,
        street: "Av. Santos Dumont",
        number: "2000",
        country: "Brazil",
        state: "Ceará",
        city: "Fortaleza",
        zipcode: "60115-000",
        default: true
    };

    const item = {
        id: 1,
        image: "https://images-americanas.b2w.io/produtos/01/00/img/3068486/0/3068486027_1SZ.jpg",
        title: "Smart TV 50 Crystal UHD Samsung 4k 50AU8000",
        price: 2699.99,
        priceOld: 2999.99,
        count: 2,
        score: 4.5,
        qtd: 1
    };

    const cart = {
        id: 1,
        content: [item, item, item],
        qtd: 3
    };

    let cartPrice = 0;
    cart.content.map((item) => {
        cartPrice = cartPrice + item.price;
    });

    return (
        <div className="market-payment-container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8">
                    <div className="market-payment-form-card">
                        <h2>Shipping Information</h2>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-8">
                                <h6>{user.name}, {user.phone}</h6>
                                <h6>{address.street}, {address.number}</h6>
                                <h6>{address.city}, {address.state}, {address.country}, {address.zipcode}</h6>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                                <a href="">Add new address or select other addresses</a>
                            </div>
                        </div>
                    </div>
                    <div className="market-payment-form-card">
                        <h2>Card Payment</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <input type="text" className="market-payment-input" placeholder="Card number" name="cardnumber" id="cardnumber" />
                                <div className="market-payment-form-group">
                                    <input type="text" className="market-payment-md-input" placeholder="MM" name="mm" id="mm" /> &nbsp;/&nbsp;
                                    <input type="text" className="market-payment-md-input" placeholder="YY" name="yy" id="yy" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <input type="text" className="market-payment-input" placeholder="Card Holder Name" name="cardholder" id="cardholder" />
                                <input type="text" className="market-payment-md-input" placeholder="CCV" name="ccv" id="ccv" />
                            </div>
                        </div>
                    </div>
                    <div className="market-payment-form-card">
                        <h2>Order Review</h2>
                        <div className="row">
                            {cart.content.map(item => (
                                <>
                                    <div className="col-12 col-sm-12 col-md-3">
                                        <img className="market-payment-card-image" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-7">
                                        <h5>{item.title}</h5>
                                        <h4>R$ {item.price}</h4>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2">
                                        <input type="number" className="market-payment-sm-input" value={item.qtd} />
                                    </div>
                                </>
                            )
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="market-payment-form-summary-card">
                        <h2>Order Summary</h2>
                        <h6>Promo Code</h6>
                        <div className="market-payment-input-group">
                            <input type="text" className="market-login-input" name="promocode" id="promocode" />
                            <button className="market-payment-btn">Apply</button>
                        </div>

                        <h3>Total: R$ {cartPrice.toFixed(2)}</h3>
                        <button className="market-login-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Payment;