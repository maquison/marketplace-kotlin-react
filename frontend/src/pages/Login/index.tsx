import "./styles.css"

function Login() {
    return (
        <div className="market-login-container">
            <form className="market-login-form-card">
                <h3>Sign in</h3>
                <input type="email" className="market-login-input" placeholder="Email" id="email" />
                <input type="password" className="market-login-input" placeholder="Password" id="password" />
                <button type="submit" className="market-login-btn">Sign in</button>
                <h6>Register</h6>
            </form>
        </div>
    );
}

export default Login;