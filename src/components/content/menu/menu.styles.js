import { styled } from 'linaria/react';

const List = styled.ul`
  width: 430px;

  border: 1px solid #32383e;
  border-radius: 2px;

  background-color: #292e32;
`;

const Item = styled.li`
  height: 48px;
  line-height: 48px;

  padding: 0 16px; 

  border-bottom: 1px solid #32383e;

  color: #5c6166;

  cursor: not-allowed;

  &:first-child {
    position: relative;
    
    color: #f7f7f7;

    cursor: pointer;

    &::before {
      position: absolute;
      left: 0;
      top: 0;

      content: '';

      height: 100%;
      width: 2px;

      background-color: #2d90e6;

    }

    &:hover {
      box-shadow: inset rgba(247, 247, 247, 0.05) 0 1px 4px;
    }
  }
`;

const Styled = { List, Item };

export default Styled;