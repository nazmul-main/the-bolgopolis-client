
import Banner from "../Components/Layout/Banner/Banner";
import Myblog from "../Components/MyBlog/Myblog";
import Newsletter from "../Components/Newsletter/Newsletter";
import RecentBlog from "../Components/RecentBlog/RecentBlog";
import StaffPics from "../Components/StaffPics/StaffPics";

const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <StaffPics></StaffPics>
            <Myblog></Myblog>
        </div>
    );
};

export default Home;