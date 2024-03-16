import avatar from '../assets/avatar.jpg'
import './Header.css'

const Header = () =>{
    return(
        <div className= 'header'>
            <div className= 'chatterly'>
                <h3>Chatterly <sup><span className="material-symbols-outlined chatterly-logo">
                    forum
                    </span></sup></h3>

                <div className = 'user-container' >
                    <img src = {avatar} alt ="img" className="user-icon" />
                    
                        <select>
                      <option>Rajeev Yadav</option>
                        </select>
                    
                </div>
            </div>
            
            <hr/>
            <div className='filter'>
                <div className='filter-text>'>
                    <h3>Filters</h3>
                </div>
                
                <div className='vertical-line'></div>

                <div className='created'>
                    <h4>Created By</h4>
                    <select>
                        <option>All</option>
                    </select>
                </div>

                <div className='publish'>
                    <h4>Published Date</h4>
                    <select>
                        <option>Select Date</option>
                    </select>
                </div>

                <div className='Search'>
                    <h4>Search</h4>
                    <input type= 'text' placeholder='Type here'></input>
                    <button className="material-symbols-outlined icon">
                        search
                    </button>
                </div>
            </div>
        </div>
)
}
export default Header;