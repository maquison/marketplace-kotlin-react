import "./styles.css"

function Address() {
    const address = {
        id: 1,
        street: "Av. Santos Dumont",
        number: "2000",
        default: true,
    };

    return (
        <div className="market-address-container">
            <form className="market-address-form-card">
            <h2>Select address</h2>
            <select className="market-login-input" id="city" required >
                    <option value={address.id}>{address.street}, {address.number}</option>
                </select>
                <button type="submit" className="market-end-btn">Select</button>
            </form>
            <h4>Or</h4>
            <form className="market-address-form-card">
                <h2>Add new address</h2>
                <h4>Contact</h4>
                <input type="text" className="market-login-input" placeholder="Contact" id="contact" required />
                <input type="tel" className="market-login-input" placeholder="Phone number" id="phone" pattern="^\([1-9]{2}\) [9]{1}[0-9]{4,5}-[0-9]{4}$" required />
                <h4>Address</h4>
                <input type="text" className="market-login-input" placeholder="Street, house/apartment/unit" id="street" required />
                <input type="text" className="market-login-input" placeholder="Street number" id="number" required />
                <select className="market-login-input" id="country" required >
                    <option value="Brazil">Brazil</option>
                </select>
                <select className="market-login-input" id="state" required >
                    <option value="Ceara">Ceará</option>
                </select>
                <select className="market-login-input" id="city" required >
                    <option value="Fortaleza">Fortaleza</option>
                </select>
                <input type="number" className="market-login-input" placeholder="Zip code" id="zipcode" required />
                <div className="market-address-form-group">
                    <input type="checkbox" id="default" /> 
                    <h6>Set as default</h6>
                </div>
                <button type="submit" className="market-login-btn">Save</button>
                <button className="market-end-btn">Cancel</button>
            </form>            
        </div>
    );
}

export default Address;