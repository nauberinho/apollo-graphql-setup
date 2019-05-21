import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = props => {
  return (
    <div>
      Launches:
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          console.log(loading, data, error);
          if (loading) return <span>Loading</span>;
          if (error) console.log(error);
          console.log(data);
          return (
            <span>
              {data.launches.map(launchItem => (
                <LaunchItem launchItem={launchItem} />
              ))}
            </span>
          );
        }}
      </Query>
    </div>
  );
};

export default Launches;
