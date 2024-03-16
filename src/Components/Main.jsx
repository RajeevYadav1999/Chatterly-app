import './Main.css'
import BlogCard from "./BlogCard";



const Main = () =>{
    return(
        <div className="main">
            <h3>Blog Posts</h3>
           <div className="blog-container">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            </div> 
        </div>
    )
}

export default Main;