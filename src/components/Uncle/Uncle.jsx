import React from 'react';

const Uncle = (props) => {
  const { house } = props;
  return (
    <div>
      <h1>Uncle </h1>
      <h3>House : {house}</h3>
    </div>
  );
};

export default Uncle;
