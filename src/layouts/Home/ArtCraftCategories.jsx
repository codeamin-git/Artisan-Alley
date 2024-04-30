import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ArtCraftCategories = () => {
    const [subCats, setSubCats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://arts-crafts-server-side.vercel.app/subCat')
            .then(res => res.json())
            .then(data => {
                setSubCats(data);
            })
            .catch(error => {
                console.error('Error fetching subcategories:', error);
            });
    }, []);

    const handleSubCat = (subcategory) => {
        navigate(`/subCat/${subcategory}`);
    };

    return (
        <div>
            <h1 className='mb-4 text-4xl font-semibold text-center'>Here you can pick a category to see similar items!</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mb-4 gap-4">
                {subCats.map(subCat =>
                    <div key={subCat._id} onClick={() => handleSubCat(subCat.subcategory)} className="flex flex-col items-center gap-6 cursor-pointer">
                        <img className="hover:scale-110 mask mask-squircle" src={subCat.image} alt={subCat.subcategory} />
                        <p className="text-xl">{subCat.subcategory}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArtCraftCategories;
