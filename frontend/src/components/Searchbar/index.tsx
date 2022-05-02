import { ReactComponent as SearchIcon } from 'assets/img/search.svg';
import './styles.css'

function Searchbar() {
    return (
        <div className="market-search-container">
            <input className="form-control" type="search" placeholder="Search..." />
            <div className="market-form-btn-container">
                <button className="btn market-btn" type="submit"><SearchIcon className="market-search-icon" /></button>
            </div>
        </div>
    );
}

export default Searchbar; 