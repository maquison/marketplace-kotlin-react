import axios from "axios";
import ItemScore from "components/ItemScore";
import { useEffect, useState } from "react";
import { Item } from "types/item";
import { BASE_URL } from "utils/requests";
import './styles.css';

type Props = {
    itemId: string;
}

function ExpandedItemCard({ itemId }: Props) {

    const [item, setItem] = useState<Item>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/item/${itemId}`)
            .then(response => {
                setItem(response.data);
            });
    }, [itemId]);

    return (
        <div className="market-item-container">
            <div className="market-item-form-container">
                <div className="market-item-form-row-container">
                    <img className="market-item-card-image" src={item?.image} alt={item?.name} />
                </div>

                <div className="market-item-form-row-info-container">
                    <h3>{item?.name}</h3>
                    <ItemScore />
                    <h1>R$ {item?.previousPrice}</h1>
                    <h3>R$ {item?.currentPrice}</h3>
                    <form className="market-form">
                        <div className="market-form-btn-container">
                            <button type="submit" className="btn btn-primary market-btn">Buy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ExpandedItemCard;