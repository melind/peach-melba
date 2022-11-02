import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';


const Blog = () => {

    return (
        
       
        <div className="">
        <Link to="blog/en"><div>English</div></Link>  <Link to="blog/jp"><div>日本語</div></Link>
          
        </div>
        
    )
}
export default Blog;