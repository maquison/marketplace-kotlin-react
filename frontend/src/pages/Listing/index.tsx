import axios from "axios";
import ItemCard from "components/ItemCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { ItemPage } from "types/item";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<ItemPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/api/items-page?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as ItemPage;
                setPage(data);                
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(item => (
                        <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                            <ItemCard item={item} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing; 