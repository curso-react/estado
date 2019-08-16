import React from 'react';

export default (props) => {
  var date = new Date(parseInt(props.timestamp, 10));
  var fecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (<span>{fecha}</span>);
}