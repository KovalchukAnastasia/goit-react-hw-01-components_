import styled from "styled-components"

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  outline: 1px solid #000;
  box-shadow:
       inset 0 -2em 2em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.2em 0.2em 1em rgba(0,0,0,0.2);
  border-radius: 4px;
  width: 300px;
  
`;

export const Status = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 8px;
`;

export const Avatar = styled.img`
  margin-right: 8px;
`;

export const Name = styled.p``;