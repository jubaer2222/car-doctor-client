// import { useEffect, useState } from "react";
// import PricesCard from "../PricesCard/PricesCard";

// const Prices = () => {
//     const [prices,setPrices]=useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/bookings')
//             .then(res => res.json())
//             .then(data => (setPrices(data)))
//     }, [])

//     return (
//         <div>
//             <div className="text-center mt-8">
//                 <h3 className="text-3xl font-bold">Our Prices </h3>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 ">

//                     {
//                         prices.map(aprice =><PricesCard
//                         key={aprice._id}
//                         aprice={aprice}
//                         ></PricesCard>)
//                     }
//             </div>
//         </div>
//     );
// };

// export default Prices;