import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css'

function Pagination() {
    return (
        <div className="market-pagination-container">            
            <div className="market-pagination-box">
                <button className="market-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <h6>{`${1} de ${3}`}</h6>
                <button className="market-pagination-button" disabled={false} >
                    <Arrow className="market-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination; 