import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = (props) => {
  const { house } = props;
  return (
    <div>
      <h1>Father</h1>
      <h4>House : {house}</h4>
      <div>
        <Brother house={house}></Brother>
        <MySelf house={house}></MySelf>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
