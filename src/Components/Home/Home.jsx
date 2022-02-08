import React, { useEffect } from 'react';
import { ContentFull } from '../../CustomHooks/ContentFull';
import { userQuery } from '../../Queries/Queries';
const Home = () => {
  let { person } = ContentFull(userQuery);
  useEffect(() => {
    console.log(person);
  });
  return (
    <>
      <div>
        <h1>Hello ! {person?.name}</h1>
      </div>
      <div>
          <p>Friends Suggestion</p>
      </div>
    </>
  );
};

export default Home;
