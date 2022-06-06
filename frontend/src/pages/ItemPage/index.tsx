import ExpandedItemCard from 'components/ExpandedItemCard';
import { useParams } from 'react-router-dom';

function ItemPage() {

    const params = useParams();

    return (
        <ExpandedItemCard  itemId={`${params.itemId}`}/>
    );
}

export default ItemPage;