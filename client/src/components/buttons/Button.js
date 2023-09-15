import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: linear-gradient(180deg,#e83a40 0,#a8282e);
  border-radius: 0.5em;
  box-shadow: inset 0 0.1em 0 #ed8488;
  color: #fff;
  font-size: 20px;
  width: 160px;
  height: 45px;
  margin: 0 12px;
  padding: 10px;
  outline: none;
  transition: background-color .4s ease-out,color .4s ease-out;
  cursor: pointer;

  &:visited {
    background-color: linear-gradient(180deg,#e83a40 0,#a8282e);
    color: white;
  }

  &:hover,
  &:active {
    background-color: linear-gradient(180deg,#e83a40 0,#a8282e);
    border: 2px solid #ed9165;
    color: white;
  }

  &:focus {
    outline: none;
    border: 2px solid #ed9165;
    color: white;
  }

  &:disabled {
    background: linear-gradient(180deg,#535353 0,#1e1d1d);
    box-shadow: inset 0 0.1em 0 #535353;
    border: none;
    cursor: not-allowed;
  }

  ${(props) =>
    props.primary &&
    css`
      color: white;
      padding: ${(props) => {
        if (props.large) return 'calc(1rem - 2px) calc(2rem - 2px)';
        else if (props.small) return 'calc(0.5rem - 2px) calc(1rem - 2px)';
        else return 'calc(0.75rem - 2px) calc(1.5rem - 2px)';
      }};

      &,
      &:visited {
        background-color: white;
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:hover,
      &:active {
        background-color: ${(props) => props.theme.colors.primaryCtaDarker};
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:focus {
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:disabled {
        background-color: grey;
        border-color: grey;
        color: white;
      }
    `}
  }
`;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullWidthOnMobile: PropTypes.bool,
};

export default Button;
