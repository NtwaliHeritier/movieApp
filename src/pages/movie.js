import { Link } from 'gatsby';
import React, { useState } from 'react';
import "../css/movie.css";

const Movie = ({edge}) => {

  const [hover, setHover] = useState(false);

  const handleEnter = () => {
    setHover(true);
  }

  const handleLeave = () => {
    setHover(false)
  }

  return ( 
    <div className="movieContainer" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className={`overlay${hover? "" : " display"}`}></div>
            <div className={`movieTitle${hover? "" : " display"}`}>
              <h3>{edge.node.Name_of_the_Movie}</h3>
              <Link to={`/movie/${edge.node.fields.slug}`} className="movieButton">Details</Link>
            </div>
            <img src={edge.node.cover} alt={edge.node.Name_of_the_Movie} className="movieImage"/>
          </div>
   );
}
 
export default Movie;