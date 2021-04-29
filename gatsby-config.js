/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
    {
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'Table',
            table: 'https://www.notion.so/9f4ce1668d6f4a67a172c4780a4aa8fa?v=7a0b235de3324979b7fb24ca69179906',
            cacheType: 'html'
          }
        ]
      }
    }
]
}