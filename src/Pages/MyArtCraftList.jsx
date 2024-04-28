import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyArtCraftList = () => {
    const {user} = useAuth()
    console.log(user);
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data)
        })
    }, [user])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-4">
            {
                items.map(item => 
                    <div key={item._id} className="card md:card-side bg-base-100 shadow-2xl">
                    <figure><img className="h-96 w-96" src={item.image} alt="item"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.itemName}</h2>
                      <div>
                        <p className="badge badge-ghost badge-2xl">Price: {item.price}</p>
                        <p className="badge badge-ghost">Rating: {item.rating}</p>
                    </div>
                    <p>
                        <span className="font-semibold">
                        Customization: </span> {item.customization}
                    </p>
                    <p>
                        <span className="font-semibold">Stock Status: </span> {item.stockStatus}
                    </p>
                      <div className="flex gap-2">
                        <Link to={`/update/${item._id}`}><button className="btn btn-warning">Update</button></Link>
                        <button className="btn btn-error">Delete</button>
                      </div>
                    </div>
                  </div>
                )
            }
        </div>
    );
};

export default MyArtCraftList;