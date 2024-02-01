import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  max-width: 500px;

  padding: 16px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: rgb(234, 234, 241);
  box-shadow: 9px 9px 14px -6px rgba(105, 103, 105, 1);
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 15px;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;
export const Input = styled.input`
  margin-bottom: 10px;
  width: 360px;
`;
