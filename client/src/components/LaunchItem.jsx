import React from "react";

const LaunchItem = ({ launchItem }) => {
  console.log(launchItem);
  return <div>{launchItem.mission_name}</div>;
};

export default LaunchItem;
