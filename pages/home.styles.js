import { styled } from 'linaria/react';

const Form = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: #1c1f21;
  color: #f7f7f7;
  
  font-family: 'SourceSanPro', sans-serif;
`;

const Label = styled.label`
  width: 460px;
  
  text-transform: uppercase;
  
  font-size: 10px;
  font-weight: 600;
`;

const Input = styled.input`
  display: block;
  
  width: 460px;
  height: 28px;
  
  margin: 4px 0 32px;

  border: 1px solid #5c6166;
  border-radius: 2px;

  background-color: #1c1f21;
  
  font-size: 16px;
`;

const Button = styled.button`
  width: 460px;
  
  padding: 5px 16px;
  margin-top: 20px;
  
  color: #2d90e6;
  background-color: #092b49;
  border: none;
  outline: none;
  
  &:hover {
    box-shadow: rgba(45, 144, 230, 0.1) 0 2px 8px;
  }
  
  &:active {
    box-shadow: rgba(45, 144, 230, 0.075) 0 2px 8px;
  }
`;

const Styled = { Form, Label, Input, Button };

export default Styled;