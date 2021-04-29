import { graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "./layout";

import "../css/index.css";
import Movie from "./movie";

export const data = graphql`
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
      }`;

const Home = ({data}) => {
  const [nodeedges, setEdges] = useState(undefined);

  useEffect( ()=> {
    const edges = data.allTable.edges;
    setEdges(edges);
  }, [])

  if(nodeedges === undefined) {
    return <div>Loading...</div>
  }

  return ( 
    <Layout>
      <div className="container">
        <div className="movies">
          {nodeedges.map(edge => <Movie edge={edge} key={edge.node.Name_of_the_Movie}/>
            )}
        </div>
      </div>
    </Layout>
   );
}
 
export default Home;

