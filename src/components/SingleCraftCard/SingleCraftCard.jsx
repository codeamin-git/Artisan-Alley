import { Link } from "react-router-dom";

const SingleCraftCard = ({ item }) => {
    const { _id, itemName, image, subcategory, price, rating
    } = item;
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-96 w-full" src={image} alt="Craft Item" /></figure>
            <div className="card-body bg-transparent">
                <h2 className="card-title">{itemName}</h2>
                <p>Category: {subcategory
                }</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="">
                    <Link to={`/viewDetails/${_id}`}>
                    <button className="btn-info btn w-full btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCraftCard;