import styled from "styled-components";

import { IBaseComponentProps } from "./interfaces";

const Title = styled.h1`
  text-decoration: underline;
`;

const BaseComponent = (props: IBaseComponentProps) => {
  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
};

export default BaseComponent;
