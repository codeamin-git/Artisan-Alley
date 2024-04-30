import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SubCat = () => {
    const { sub } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (sub) {
            fetch(`https://arts-crafts-server-side.vercel.app/subCat/${sub}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [sub]);

    console.log(items, sub);
    return (
        <div className="min-h-[calc(100vh-120px)] mt-4 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-4">
            {
                items.map(item =>
                    <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.itemName}</h2>
                            <p><span className="font-bold">Subcategory: </span> {item.subcategory}</p>
                            <p><span className="font-bold">Description: </span>{item.description}</p>
                            <p><span className="font-bold">Price: </span>{item.price}</p>
                            <div className="flex items-center gap-1"><span className="font-bold">Rating:</span> {item.rating} <img className="w-6" src="https://i.ibb.co/z4gwJ8y/ratings.gif" alt="" /></div>
                            <p><span className="font-bold">Processing Time: </span>{item.processingTime}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/viewDetails/${item._id}`}>
                                    <button className="btn btn-info">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SubCat;
