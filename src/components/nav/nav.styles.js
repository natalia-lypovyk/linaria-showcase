import { styled } from 'linaria/react';

const Navigation = styled.nav`
  height: 40px;
  
  padding: 0 32px;
  
  background-color: #1c1f21;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  height: 40px;
  
  padding: 0 16px;
  
  color: #747b81;

  line-height: 40px;
  
  cursor: not-allowed;
  
  font-family: 'SourceSanPro', sans-serif;
  font-size: 16px;
  font-weight: 300;
  
  &:last-child {
    position: relative;
    
    color: #f7f7f7;
    font-weight: 600;
    
    cursor: pointer;
    
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      
      width: 100%;
      height: 2px;
      
      content: '';
      
      background-color: #2d90e6;
    }

    &:hover {
      background-color: #292e32;
    }
  }
`;

const Styled = { Navigation, List, ListItem };

export default Styled;