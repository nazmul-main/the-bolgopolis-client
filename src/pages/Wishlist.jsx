import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import WishListDesign from "../Components/WishList/WishListDesign";




/* Wish List api  */
const Wishlist = () => {


    

    const { user } = useAuth()
    const wishlistapi = `https://the-blogopolis-server.vercel.app/api/v1/user/wishlist?email=${user?.email}`

    const wishlistItem = async () => {
        try {
            const response = await fetch(wishlistapi);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };
    const { data: wishlist, isLoading, refetch } = useQuery({ queryKey: [`/api/v1/user/wishlist?email=${user?.email}`], queryFn: wishlistItem })
    if (isLoading) {
        return <p>loading...</p>
    }
    console.log(wishlist);


    return (
        <div className="max-w-screen-xl mx-auto px-4 min-h-screen">

            <h1 className="text-4xl font-bold text-center py-7"> Your Wishlist </h1>
            <div className="md:w-2/3 mx-auto md:px-12 md:py-12 px-4 py-4 space-y-4  md:space-y-12 border-2 bg-stone-400 rounded-3xl">

                {
                    wishlist?.map(wish => <WishListDesign key={wish._id} wish={wish} refetch={refetch}>
                    </WishListDesign>)
                }

            </div>
        </div>
    );
}

export default Wishlist;