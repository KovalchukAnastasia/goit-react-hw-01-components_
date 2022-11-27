import styled from 'styled-components'

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid #000;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  font-weight: 500;
  color: #d2d2d0;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #d9dadb;
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    outline: 1px solid #000;
    padding: 10px 0;
  }
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 700;
`;