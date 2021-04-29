import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import Layout from "./layout";

import "../css/index.css";
import Movie from "./movie";

const Home = () => {

  const {allTable: {edges}} = useStaticQuery(graphql`
    query {
      allTable {
        edges {
          node {
            Name_of_the_Movie
            Year
            Description
            cover
            fields {
          slug
        }
          }
        }
      }
    }
  `);

  return ( 
    <Layout>
      <div className="container">
        <div className="movies">
          {edges.map(edge => <Movie edge={edge} key={edge.node.Name_of_the_Movie}/>
            )}
        </div>
      </div>
    </Layout>
   );
}
 
export default Home;
