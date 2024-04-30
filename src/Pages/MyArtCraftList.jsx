import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraftList = () => {
    const { user } = useAuth()
    console.log(user);
    const [items, setItems] = useState([])
    const [control, setControl] = useState(false)
    const [customizationFilter, setCustomizationFilter] = useState('all')

    useEffect(() => {
        fetch(`https://arts-crafts-server-side.vercel.app/myList/${user?.email}?customization=${customizationFilter}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
    }, [user, control, customizationFilter])

    const handleCustomizationChange = (e) => {
        setCustomizationFilter(e.target.value);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://arts-crafts-server-side.vercel.app/deleteItem/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                              });
                              setControl(!control)
                        }
                    })
            }
        });
    }

    return (
        <div className="mb-4 min-h-[calc(100vh-120px)]">
            <div className="text-center mt-4 mb-4">
                <label htmlFor="customizationFilter">Filter by Customization:</label>
                <select id="customizationFilter" value={customizationFilter} onChange={handleCustomizationChange}>
                    <option value="all">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-4">
                {
                    items.map(item =>
                        <div key={item._id} className="card md:card-side bg-base-100 shadow-2xl">
                            <figure><img className="h-96 w-96" src={item.image} alt="item" /></figure>
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
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyArtCraftList;