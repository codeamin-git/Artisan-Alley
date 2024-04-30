import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const AddCraftItem = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        const newItem = {
            ...data,
            email: user?.email,
            name: user?.displayName
        }
        // send data to server
        fetch('https://arts-crafts-server-side.vercel.app/addCrafts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.insertedId){
                toast.success('Your item added to database!')
                console.log(data);
            }
        })
    }

    return (
        <div style={{backgroundImage:'url(https://i.ibb.co/hVnkmZj/origami-02.jpg)'}} className="bg-cover">
            <h1 className="md:text-6xl text-3xl font-medium text-center mb-4">Here you can add Paper Crafts & Glass Arts item filling the form properly</h1>
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
                            type="text" placeholder="image URL" className="input input-bordered" required />
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Item Name</span>
                        </label>
                        <input
                            {...register("itemName", { required: true })}
                            type="text" placeholder="item name" className="input input-bordered" required />
                        {errors.itemName && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>

                {/* subcategory & customization */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Subcategory Name</span>
                        </label>
                        <select
                            {...register("subcategory", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required>
                            <option value="">select a category</option>
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
                        <select
                            {...register("customization", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required>
                            <option value="">select an option</option>
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
                            type="text" placeholder="short description" className="input input-bordered" required />
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
                            type="text" placeholder="price" className="input input-bordered" required />
                        {errors.price && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Rating</span>
                        </label>
                        <input
                            {...register("rating", { required: true })}
                            type="text" placeholder="rating" className="input input-bordered" required />
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
                            type="text" placeholder="processing time" className="input input-bordered" required />
                        {errors.processingTime && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Stock Status</span>
                        </label>
                        <select
                            {...register("stockStatus", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required>
                            <option value="">select an option</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                </div>

                {/* user email & user name */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                        
                            type="text" placeholder="your email" className="input input-bordered" defaultValue={user?.email} readOnly/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Name</span>
                        </label>
                        <input
                            
                            type="text" placeholder="your name" className="input input-bordered" defaultValue={user?.displayName} readOnly/>
                    </div>
                </div>

                <button className="btn btn-accent w-full mt-4">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddCraftItem;