import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    FIND CONTACT BY NAME
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
