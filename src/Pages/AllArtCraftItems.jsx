import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtCraftItems = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getAllCrafts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data)
        })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table mt-4">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Price & Rating</th>
        <th>Stock Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* dynamic row */}
      {
        items.map((item, index) => 
        <tr className="hover" key={item._id}>
            <th>
                {index + 1}
            </th>
            <td>
            <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.itemName}</div>
              <div className="text-sm opacity-50">{item.subcategory}</div>
            </div>
          </div>
            </td>

            <td>
          {item.price}
          <br/>
          <p className="flex items-center">
          <span className="badge badge-ghost badge-sm">{item.rating}</span><img className="w-4" src="https://i.ibb.co/z4gwJ8y/ratings.gif" alt="" />
          </p>
        </td>
        <td>
            {item.stockStatus}
        </td>
        <th>
            <Link to={`/viewDetails/${item._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
        </tr>
        )
      }
      </tbody>
      </table>
        </div>
    );
};

export default AllArtCraftItems;