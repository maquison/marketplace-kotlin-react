import "./styles.css"

function Register() {
    return (
        <div className="market-register-container">
            <form className="market-register-form-card">
                <h3>Register</h3>
                <input type="text" className="market-login-input" placeholder="Complete name" id="name" required />
                <div className="market-register-form-group">
                    <label htmlFor="date">Birth date</label>
                    <input type="date" className="market-register-date-input" id="birthday" required />
                </div>
                <input type="number" className="market-login-input" placeholder="CPF" id="cpf" required />
                <input type="tel" className="market-login-input" placeholder="Phone number" id="phone" pattern="^\([1-9]{2}\) [9]{1}[0-9]{4,5}-[0-9]{4}$" required />
                <input type="email" className="market-login-input" placeholder="Email address" id="email" required />
                <input type="password" className="market-login-input" placeholder="Password" id="password" required />
                <input type="password" className="market-login-input" placeholder="Confirm Password" id="confirmpass" required />
                <button type="submit" className="market-login-btn">Create account</button>
                <h6>Sign in</h6>
            </form>
        </div>
    );
}

export default Register;