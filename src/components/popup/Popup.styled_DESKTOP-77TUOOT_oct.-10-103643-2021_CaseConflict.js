import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Back = styled.div`
  display: ${({visible}) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: 30s;
  opacity: ${({visible}) => (visible ? "1" : "0")};

`;

export const Content = styled.div`
  background: white;
  border-radius: 25px;
  width: 600px;
  padding: 10px 30px 30px 30px;
  position: relative;
  font-size: 1.2rem;
  z-index: 9999;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.8rem;
  color: #f77754;
  font-weight: 500;
`;

export const Close = styled.div`
  width: 30px;
  height: 30px;
  display: block;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;

  &:after,
  &:before {
    content: "";
    width: 30px;
    height: 2px;
    background: #425363;
    left: 0px;
    top: 12px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    position: absolute;
  }

  &:after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  &:hover:after,
  &:hover:before {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;
