import { graphql, useStaticQuery } from "gatsby"

// https://stackoverflow.com/questions/66538038/get-array-of-all-existing-page-routes-in-gatsby

const useInternalPaths = () => {
  const {
    pages: { nodes },
  } = useStaticQuery(graphql`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  return nodes.map(node => node.path)
}