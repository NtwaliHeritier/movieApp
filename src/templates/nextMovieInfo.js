import { graphql } from "gatsby"
import React from "react"
import Layout from "../pages/layout"
import "../css/template/movie.css"

export const query = graphql`
  query($slug: String!) {
    table(fields: { slug: { eq: $slug } }) {
      Name_of_the_Movie
      Year
      Description
      cover
    }
  }
`

const Movie = ({ data }) => {
  return (
    <Layout>
      <div className="movie-div">
        <span className="movie-title">{data.table.Name_of_the_Movie}</span>

        <div className="movie-descr">
          <span>
            Description of the next movie info: {data.table.Description}
          </span>
          <span>Year: {data.table.Year[0]}</span>
        </div>
      </div>
    </Layout>
  )
}

export default Movie
