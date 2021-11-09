import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState([]);

    const[loading, setLoading] = useState(true);

    const[error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
        fetch('http://localhost:4000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('couldn\'t fetch the data for that resourse');
                };
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setBlogs(data);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
        },1000);
    },[])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <BlogList blogs = {blogs} />
           
        </div>
     );
}
 
export default Home;