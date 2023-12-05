import React from "react"
import ContentLoader from "react-content-loader"

const SKeleton = (props) => (
  <ContentLoader 
    speed={3}
    width={320}
    height={160}
    viewBox="0 0 320 160"
    backgroundColor="#f2f2f2"
    foregroundColor="#ddcfcf"
    {...props}
  >
    <rect x="0" y="8" rx="3" ry="3" width="88" height="16" /> 
    <rect x="0" y="30" rx="3" ry="3" width="52" height="16" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="160" /> 


  </ContentLoader>
)

export default SKeleton