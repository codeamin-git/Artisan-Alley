import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const item = useLoaderData()
    console.log(item);
    const {image, itemName, subcategory, description, price, rating, customization, processingTime, stockStatus} = item;
    return (
        <div className="flex flex-col md:flex-row container mx-auto">
            <div className="md:w-2/3">
                <img className="w-full h-[calc(100vh-120px)] rounded-xl" src={image} alt="" />
            </div>
            <div className="md:w-1/3 flex flex-col justify-center">
                <h1><span className="font-bold">Product name:</span> {itemName}</h1>
                <p>
                <span className="font-bold">Category:</span> {subcategory}
                </p>
                <p><span className="font-bold">Price:</span> {price}</p>
                <div className="flex items-center gap-1"><span className="font-bold">Rating:</span> {rating} <img className="w-6" src="https://i.ibb.co/z4gwJ8y/ratings.gif" alt="" /></div>
                <p>
                <span className="font-bold">Description:</span> {description}
                </p>
                <p><span className="font-bold">Customization:</span> {customization}</p>
                <p>
                <span className="font-bold">Processing Time:</span> {processingTime}
                </p>
                <p>
                <span className="font-bold">Stock Status:</span> {stockStatus}
                </p>
            </div>
        </div>
    );
};

export default ViewDetails;