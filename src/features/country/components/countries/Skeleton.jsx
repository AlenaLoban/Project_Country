import React from "react";
import ContentLoader from "react-content-loader";

const SKeleton = (props) => (
  <ContentLoader
    speed={3}
    width={280}
    height={280}
    viewBox="0 0 280 280"
    backgroundColor="#f2f2f2"
    foregroundColor="#ddcfcf"
    {...props}
  >
    <rect x="0" y="8" rx="3" ry="3" width="270" height="130" />
    <rect x="20" y="150" rx="3" ry="3" width="220" height="25" />
    <rect x="20" y="180" rx="3" ry="3" width="220" height="70" />
  </ContentLoader>
);

export default SKeleton;
