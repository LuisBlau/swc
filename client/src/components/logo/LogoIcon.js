import React from 'react';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
//import theme from '../../styles/theme';
const StyledLogoIcon = styled.div`
  width: 70px;
  height: 50px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`;
const LogoIcon = () => (
  <StyledLogoIcon />
);
export default LogoIcon;
