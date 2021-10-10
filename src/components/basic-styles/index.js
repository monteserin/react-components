import styled, {createGlobalStyle} from 'styled-components';
import gothamMedium from './fonts/gotham-medium.ttf';
import gothamBold from './fonts/gotham-bold.ttf';

export const primary = '#0d6efd';
export const secondary = '#6c757d';
export const success = '#28a745';
export const info = '#17a2b8';
export const warning = '#ffc107';
export const danger = '#dc3545';
export const light = '#f8f9fa';
export const dark = '#343a40';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url(${gothamMedium});
    font-family: gotham;
  }

  @font-face {
    src: url(${gothamBold});
    font-family: gotham;
    font-weight: bold;
  }

  body {
    background-color: white;
    font-family: gotham;
    margin: 0;
  }
`;