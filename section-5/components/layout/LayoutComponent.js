import React, { Fragment } from 'react';
import MainHeaderComponent from './MainHeaderComponent';

const LayoutComponent = ({children}) => {
  return (
   <Fragment>
    <MainHeaderComponent />
<main>
  {children}
</main>
   </Fragment>
  );
};

export default React.memo(LayoutComponent);
