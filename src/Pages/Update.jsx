import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data);
        const updatedItem = data
        fetch(`https://arts-crafts-server-side.vercel.app/updateItem/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                toast.success('This item updated successfully!')
            }
        })
    }

    useEffect(()=>{
        fetch(`https://arts-crafts-server-side.vercel.app/update/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setItem(data)
        })
    }, [id])
    return (
        <div style={{backgroundImage:'url(https://i.ibb.co/R326SjT/arts-01.jpg)'}} className="bg-cover bg-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body container mx-auto bg-transparent bg-base-100">

                {/* image & itemName */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Image</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="text" placeholder="image URL" className="input input-bordered" required defaultValue={item.image}/>
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Item Name</span>
                        </label>
                        <input
                            {...register("itemName", { required: true })}
                            type="text" placeholder="item name" className="input input-bordered" required defaultValue={item.itemName}/>
                        {errors.itemName && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>

                {/* subcategory & customization */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Subcategory Name</span>
                        </label>
                        <select defaultValue={item.subcategory}
                            {...register("subcategory", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required >
                            <option value="Card Making">Card Making</option>
                            <option value="Scrapbooking">Scrapbooking</option>
                            <option value="Paper Quilling & Origami">Paper Quilling & Origami</option>
                            <option value="Glass Painting">Glass Painting</option>
                            <option value="Lampworking">Lampworking</option>
                            <option value="Glass Dying & Staining">Glass Dying & Staining
                            </option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Customization</span>
                        </label>
                        <select defaultValue={item.customization}
                            {...register("customization", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>

                {/* short description */}
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Short Description</span>
                        </label>
                        <input
                            {...register("description", { required: true })}
                            type="text" placeholder="short description" className="input input-bordered" required defaultValue={item.description}/>
                        {errors.description && <span className="text-red-500">This field is required</span>}
                    </div>

                {/* price & rating */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Price</span>
                        </label>
                        <input
                            {...register("price", { required: true })}
                            type="text" placeholder="price" className="input input-bordered" required defaultValue={item.price}/>
                        {errors.price && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Rating</span>
                        </label>
                        <input
                            {...register("rating", { required: true })}
                            type="text" placeholder="rating" className="input input-bordered" required defaultValue={item.rating}/>
                        {errors.rating && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>

                {/* processingTime & stockStatus */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Processing Time</span>
                        </label>
                        <input
                            {...register("processingTime", { required: true })}
                            type="text" placeholder="processing time" className="input input-bordered" required defaultValue={item.processingTime}/>
                        {errors.processingTime && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Stock Status</span>
                        </label>
                        <select
                            {...register("stockStatus", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required>
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-accent w-full mt-4">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;