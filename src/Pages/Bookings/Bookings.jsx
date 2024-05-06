import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {

        axios.get(url , {withCredentials:true})
        .then(res=>{
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])


    const handleDelete = _id=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure you want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/bookings/${_id}`, {
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data);
                const remaining =bookings.filter(booking => booking._id !==_id);
                setBookings(remaining);
                if(data.deletedCount >0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your drawing has been deleted.",
                        icon: "success"
                      });
                }
            })



            }
          });
    }
    return (
        <div>
            <h3> Bookings:{bookings.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map(booking=> <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        ></BookingRow>)
                       }
                        
                        
                       
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default Bookings;