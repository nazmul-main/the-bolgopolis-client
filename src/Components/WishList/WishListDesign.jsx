/* eslint-disable react/prop-types */

import { Link,  } from "react-router-dom";
import Swal from "sweetalert2";




const WishListDesign = ({ wish , refetch}) => {
    const { _id,  category, img, short_description, title } = wish;


  

     /* Deletehabdle */
     const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete  this cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://the-blogopolis-server.vercel.app/api/v1/user/wishlist/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                           refetch()
                            
                             .fire(
                                'Deleted!',
                                'your cart has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })

        
    };
    


    return (
        <div className='md:grid md:grid-cols-3 gap-4 bg-stone-200 px-4 py-4 rounded-3xl'>
            <div className='col-span-1'>
                <img className="bg-stone-400 object-cover border-slate-500 p-2 rounded-2xl" src={img} alt="" />
                
            </div>
            <div className='col-span-2 '>
                <p className="text-4xl font-semibold mb-4">{title}</p>
                <h4 className="text-black inline text-sm  border-2 border-stone-400 bg-stone-200 px-3 py-1 rounded-2xl font-semibold m">{category}</h4>
                <p className="my-4">{short_description}</p>
                <div className="my-4 flex gap-5 px-2 ">
                <Link to={`/blogdetails/${_id}`}  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Details
                </Link>
                    <button onClick={() => handleDelete(_id)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                        Remove Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishListDesign;