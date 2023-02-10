import React from 'react';
import ProTypes from 'prop-types';
import './GlobalStyles.scss';
import './GlobalGrid.scss';

interface IChildrenProps {
  children: React.ReactNode;
}

const GlobalStyles = ({ children }: IChildrenProps) => {
  return <>{children}</>;
};

GlobalStyles.propType = {
  children: ProTypes.node.isRequired,
};

export default GlobalStyles;
