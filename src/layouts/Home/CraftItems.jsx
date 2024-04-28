import { useEffect, useState } from "react";
import SingleCraftCard from "../../components/SingleCraftCard/SingleCraftCard";

const CraftItems = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getCrafts')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            console.log(data);
        })
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 mx-auto container gap-6">
            {
                items.map(item => <SingleCraftCard key={item._id} item={item}></SingleCraftCard>)
            }
        </div>
    );
};

export default CraftItems;