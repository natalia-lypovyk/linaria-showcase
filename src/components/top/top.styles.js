import { styled } from 'linaria/react';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  height: 62px;
  
  padding: 16px 32px;
  
  background-color: #1c1f21;
  color: #f7f7f7;
`;

const OwnerName = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  font-family: 'SourceSanPro', sans-serif;
  font-size: 22px;
  letter-spacing: -0.22px;
  
  line-height: 1.375em;
  margin-left: 5px;
`;

const InfoBlock = styled.div`
  display: flex;
`;

const Item = styled.table`
  display: flex;
  
  border: 1px solid #5c6166;
  border-radius: 2px;
  border-collapse: collapse;
  
  background-color: #292e32;
  
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
const ItemContent = styled.td`
  padding: 5px 16px;
  
  font-family: 'SourceSanPro', sans-serif;
  font-weight: 300;
  
  &:first-child {
    border-right: 1px solid #5c6166;
  }
`;

const Styled = { Container, OwnerName, Name, InfoBlock, Item, ItemContent };

export default Styled;