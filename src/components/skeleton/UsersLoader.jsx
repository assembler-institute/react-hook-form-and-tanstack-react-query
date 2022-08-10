import React from "react"
import ContentLoader from "react-content-loader"

const UsersLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="55" cy="46" r="34" /> 
    <circle cx="57" cy="128" r="34" /> 
    <circle cx="58" cy="211" r="34" /> 
    <rect x="116" y="19" rx="0" ry="0" width="266" height="22" /> 
    <rect x="118" y="51" rx="0" ry="0" width="266" height="9" /> 
    <rect x="120" y="98" rx="0" ry="0" width="266" height="22" /> 
    <rect x="121" y="130" rx="0" ry="0" width="266" height="9" /> 
    <rect x="120" y="186" rx="0" ry="0" width="266" height="22" /> 
    <rect x="121" y="218" rx="0" ry="0" width="266" height="9" />
  </ContentLoader>
)

export default UsersLoader