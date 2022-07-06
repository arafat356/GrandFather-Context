import React from 'react';

const Aunty = (props) => {
  const { house } = props;
  return (
    <div>
      <h1>Aunty</h1>
      <h3>House : {house}</h3>
    </div>
  );
};

export default Aunty;
