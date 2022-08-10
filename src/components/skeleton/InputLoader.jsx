import React from "react"
import ContentLoader from "react-content-loader"

const SearchLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="116" y="19" rx="0" ry="0" width="266" height="22" /> 
    <rect x="117" y="52" rx="0" ry="0" width="266" height="9" />
  </ContentLoader>
)

export default SearchLoader