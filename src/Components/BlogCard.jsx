import Logo from '../assets/article-img.png'
import avatar from '../assets/avatar.jpg'
import './BlogCard.css'


const BlogCard = () => {
    return(
        <>
        <div className="blog-data">
            <img src ={Logo} alt="img"/>
            <h2>How to make GUI in Java with Example Example</h2>
            <hr/>
        <div className="blog-footer">
            <div className="footer-img">
           <img src= {avatar} alt="img"/>
           </div> 
            <div className="footer-text">
            <p className="footer-name">Rajeev</p>
            <p className="footer-date">Jan 10, 2022</p>
            </div>
            <div className="footer-icons">
            <div className="heart"> 
          <i className="fa-solid fa-heart" /> 03
        </div>
        <div className="comment">
          <i className="fa-solid fa-comment" /> 12
        </div>
        </div>
        </div>
        </div>
        </>

    )
}

export default BlogCard;
          

          