import React from 'react';

export default function Link(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  return <a href={props.to}>{props.children}</a>;
}
