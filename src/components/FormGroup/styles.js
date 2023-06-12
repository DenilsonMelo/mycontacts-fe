import { styled } from 'styled-components';

export const Container = styled.div`
  & + &{
    margin-top: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button{
    width: 100%;
  }
`;
