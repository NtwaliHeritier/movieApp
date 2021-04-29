const path = require('path');

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions;
  if(node.internal.type === 'Table') {
    const slug = node.slug;
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const movieTemplate = path.resolve('./src/templates/movie.js');
  const response = await graphql(`
  query {
  allTable {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}

`);

response.data.allTable.edges.forEach(edge => {
  createPage({
    component: movieTemplate,
    path: `/movie/${edge.node.fields.slug}`,
    context: {
      slug: edge.node.fields.slug
    }
  })
})
}