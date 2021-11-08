import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'andrew', id: 1},
        { title: 'welcome party!', body: 'lorem ipsum...', author: 'shery', id: 2},
        { title: 'web developer', body: 'lorem ipsum...', author: 'essam', id: 3}
    ]);

    const handleDelete  = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !==  id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className="home">
           <BlogList blogs = {blogs} title = "All Blogs!!" handleDelete = {handleDelete}/>
           
        </div>
     );
}
 
export default Home;