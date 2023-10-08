/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function LazyComponent(props) {
  const Component = React.lazy(() => import(`@/views/${props.path}`));
  return (
    <React.Suspense>
      <Component />
    </React.Suspense>
  );
}
