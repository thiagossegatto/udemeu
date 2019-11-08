import styled from 'styled-components/native';

export const ContainerImage = styled.View`
  width: 100%;
  height: 220px;
`;

export const Image = styled.Image.attrs({resizeMode: 'cover'})`
  width: 100%;
  height: 100%;
`;
