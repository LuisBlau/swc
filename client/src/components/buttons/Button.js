import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: linear-gradient(180deg,#e83a40 0,#a8282e);
  border-radius: 0.5em;
  box-shadow: inset 0 0.1em 0 #ed8488;
  color: #fff;
  font-size: 20px;
  height: 45px;
  margin: 0 12px;
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
    color: white;
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
    color: white;
  }

  &:disabled {
    background-color: grey;
    border-color: 2px solid grey;
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

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.primaryCta};

      &,
      &:visited {
        background-color: transparent;
        color: white};
      }

      &:hover,
      &:active {
        background-color: transparent;
        color: ${(props) => props.theme.colors.primaryCtaDarker};
      }

      &:focus {
        outline: none;
        color: ${(props) => props.theme.colors.primaryCtaDarker};
      }

      &:disabled {
        border: 2px solid grey;
        background-color: grey;
        color: white;
      }
    `}
  
  ${(props) =>
    props.large &&
    css`
      font-size: 1.6rem;
      line-height: 1.6rem;
      min-width: 250px;
      padding: 1rem 2rem;
    `}
  
  ${(props) =>
    props.small &&
    css`
      font-size: 1.1rem;
      line-height: 1.1rem;
      min-width: 125px;
      padding: 0.5rem 1rem;
    `}
  
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

    @media screen and (max-width: 1024px) {
    ${(props) =>
      props.large &&
      css`
        font-size: 1.4rem;
        line-height: 1.4rem;
        min-width: 250px;
        padding: 0.75rem 1.5rem;
      `}

    ${(props) =>
      (props.fullWidthOnMobile || props.fullWidth) &&
      css`
        width: 100%;
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
