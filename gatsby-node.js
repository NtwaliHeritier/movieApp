const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Table") {
    const slug = node.slug
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const movieTemplate = path.resolve("./src/templates/movie.js")
  const nextMovieInfoTemplate = path.resolve("./src/templates/nextMovieInfo.js")
  const response = await graphql(`
    query {
      allTable {
        edges {
          node {
            Name_of_the_Movie
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allTable.edges.forEach(edge => {
    const movie_name = edge.node.Name_of_the_Movie.split(" ").join("-")

    createPage({
      component: movieTemplate,
      // path: `/movie/${edge.node.fields.slug}`,
      path: `/movie/${movie_name}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })

    //---------------next page------------
    createPage({
      component: nextMovieInfoTemplate,
      path: `/movie/next-info-of-${movie_name}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
