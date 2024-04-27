import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const AddCraftItem = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div style={{backgroundImage:'url(https://i.ibb.co/hVnkmZj/origami-02.jpg)'}} className="bg-cover">
            <h1 className="md:text-6xl text-3xl font-medium text-center mb-6">Here you can add Paper Crafts & Glass Arts item filling the form properly</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="container mx-auto bg-transparent bg-base-100">

                {/* image & itemName */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Image</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="text" placeholder="image URL" className="input input-bordered" required />
                        {errors.image && <span>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Item Name</span>
                        </label>
                        <input
                            {...register("itemName", { required: true })}
                            type="text" placeholder="item name" className="input input-bordered" required />
                        {errors.itemName && <span>This field is required</span>}
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
                            <option value="card making">Card Making</option>
                            <option value="scrapbooking">Scrapbooking</option>
                            <option value="paper quilling & origami">Paper Quilling & Origami</option>
                            <option value="glass painting">Glass Painting</option>
                            <option value="lampworking">Lampworking</option>
                            <option value="Glass Dying & Staining
">Glass Dying & Staining
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
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
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
                        {errors.description && <span>This field is required</span>}
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
                        {errors.price && <span>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Rating</span>
                        </label>
                        <input
                            {...register("rating", { required: true })}
                            type="text" placeholder="rating" className="input input-bordered" required />
                        {errors.rating && <span>This field is required</span>}
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
                        {errors.processingTime && <span>This field is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Stock Status</span>
                        </label>
                        <select
                            {...register("stockStatus", { required: true })}
                            type="text" placeholder="select an option" className="input input-bordered" required>
                            <option value="">select an option</option>
                            <option value="in stock">In Stock</option>
                            <option value="made to order">Made to Order</option>
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
                            {...register("email")}
                            type="text" placeholder="your email" className="input input-bordered" value={user?.email}/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Name</span>
                        </label>
                        <input
                            {...register("name")}
                            type="text" placeholder="your name" className="input input-bordered" value={user?.displayName}/>
                    </div>
                </div>

                <button className="btn btn-primary w-full mt-4">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddCraftItem;