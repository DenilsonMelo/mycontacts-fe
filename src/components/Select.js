import { styled } from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 0 16px;
  outline: none;
  font-size: 16px;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;