import "./Footer.css"


const Footer = () => {
    return(
        <>
        <div className="main-footer">
            <div className="training-blog">
                <div className="training">
                <span><h3 className="text-training">Training </h3></span>
                <span><h3 className="blog">Blog</h3></span>
                </div>
                <p>Welcome to our technical blog, where we delve into the world of cutting-edge technologies and explore their practical applications</p>
            </div>

           <div className="category">
            <h3 className="category-text">CATEGORY</h3>
            <ul className="cat-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>VSCODE</li>
            </ul>
            </div> 

           <div className="touch">
            <h3 className="touch-text">GET IN TOUCH</h3>
            <ul className="touch-list">
                <li>+91-8XXX-XXX-XX</li>
                <li>Demo@gMAIL.COM</li>
            </ul>
            </div> 

            <div className="follow">
                <h3 className="follow-text">FOLLOW US ON</h3>
                <div className="follow-icons">
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-square-instagram" />
                <i className="fa-brands fa-linkedin" />
                </div>
            </div>
        </div>
            <hr />

            <div className="end-footer">
                <p className="copy">&copy;2023 TRAININGBLOG</p>
                <p className="made">MADEWITH❤️MOHALI,INDIA</p>
            </div>
        </>
    )
}

export default Footer