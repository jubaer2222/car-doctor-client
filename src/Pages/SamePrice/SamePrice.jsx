import { useLoaderData } from "react-router-dom";

const SamePrice = () => {

    const samePrice =useLoaderData();
    const{customerName,email,price,img}=samePrice;
    return (
        <div>
            <h3>ToTal : {customerName}</h3>
        </div>
    );
};

export default SamePrice;