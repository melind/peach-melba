import React from 'react';
import {Link} from 'react-router-dom';


const Footerjapan = () => {
  return (
    <div className="footer">
      
      <div className='reseaux_sociaux'>
        <a href="https://www.linkedin.com/in/melimendy/" target="_blank"><img src="https://cdn.cdnlogo.com/logos/l/78/linkedin-icon.svg" alt=" linkedin logo" width="50"/></a>
        <a href="https://www.behance.net/melimendy" target="_blank"><img src="https://cdn.cdnlogo.com/logos/b/29/behance.svg" width="50"/></a>
        <a href="https://www.instagram.com/miss_pechemelba/" target="_blank"><img src="https://cdn.cdnlogo.com/logos/i/92/instagram.svg" width="50"/></a>
      </div>
     
     
      <a href="https://pechemelba.tunetoo.com/" target="_blank">グッディーズ </a> <br/><br/><Link to="/jp/legal-mentions"> 法的通知</Link>
      
    </div>
  );
}

export default Footerjapan;