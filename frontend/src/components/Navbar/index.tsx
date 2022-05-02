import { ReactComponent as ProfileIcon } from 'assets/img/profile.svg';
import Searchbar from 'components/Searchbar';

import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="market-nav-content">
                    <h1>Marketplace</h1>
                    <Searchbar/>
                    <a href="https://github.com/maquison/marketplace-kotlin-react">
                        <div className="market-profile-container">
                            <ProfileIcon className="market-profile-icon" />
                            <p className="market-profile-link">Profile</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar; 