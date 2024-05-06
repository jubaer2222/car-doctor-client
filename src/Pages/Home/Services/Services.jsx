import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => (setServices(data)))
    }, [])
    return (
        <div>
            <div className="text-center mt-8">
                <h3 className="text-3xl font-bold">Our Services </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 ">

                    {
                        services.map(service=> <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                    }
            </div>
        </div>
    );
};

export default Services;