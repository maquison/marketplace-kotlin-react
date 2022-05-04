import { ReactComponent as ProfileIcon } from 'assets/img/profile.svg';
import { ReactComponent as CartIcon } from 'assets/img/cart.svg';
import Searchbar from 'components/Searchbar';

import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="market-nav-content">
                    <h1>Marketplace</h1>
                    <Searchbar/>
                    <div className="market-icons">
                    <a href="https://github.com/maquison/marketplace-kotlin-react">
                        <div className="market-profile-container">
                            <ProfileIcon className="market-profile-icon" />
                            <p className="market-profile-link">Profile</p>
                        </div>
                    </a>
                    <CartIcon className="market-profile-icon" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar; 