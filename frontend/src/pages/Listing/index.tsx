import axios from "axios";
import ItemCard from "components/ItemCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { ItemPage } from "types/item";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/items-page?size=12&page=0&sort=id`)
            .then(response => {
                const data = response.data as ItemPage;
                console.log(response.data);
                setPageNumber(data.number);
            });
    }, []);

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <ItemCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <ItemCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <ItemCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <ItemCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <ItemCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing; 