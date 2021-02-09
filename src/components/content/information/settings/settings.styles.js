import { styled } from 'linaria/react';

const Title = styled.p`
  padding: 8px 16px 8px 0;
  margin-bottom: 16px;

  color: #f7f7f7;

  font-size: 22px;
  font-weight: 600;
`;

const Text = styled.p`
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 600;
  color: #f7f7f7;
`;

const RenameBlock = styled.div`
  display: flex;
`;

const Block = styled.div`
  width: 350px;
  height: 28px;

  padding: 0 8px;
  margin-right: 8px;
  line-height: 28px;

  border: 1px solid #5c6166;
  border-radius: 2px;

  color: #8c979b;
  background-color: #1c1f21;

  &:hover {
    box-shadow: rgba(247, 247, 247, 0.1) 0 2px 8px;
  }
`;
const Button = styled.button`
  padding: 5px 16px;

  border: none;
  border-radius: 2px;

  background-color: #292e32;
  color: #f7f7f7; 

  &:hover {
    box-shadow: rgba(247, 247, 247, 0.05) 0 2px 8px;
  }
`;

const Checkbox = styled.input`

`;

const Styled = { Title, Text, RenameBlock, Button, Block };

export default Styled;