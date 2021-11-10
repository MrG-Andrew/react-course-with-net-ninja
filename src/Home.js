import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

    const {data: blogs, loading, error} = useFetch('http://localhost:4000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} />}
           
        </div>
     );
}
 
export default Home;