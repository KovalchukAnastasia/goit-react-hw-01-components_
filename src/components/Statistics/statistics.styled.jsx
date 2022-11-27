import styled from 'styled-components'

export const Section = styled.section`
  background-color: #fff;
  width: 350px;
  border-radius: 5px;
  border: 1px solid #000;
  margin-bottom: 20px;
  & h2 {
    padding: 25px;
    text-align: center;
      font-size: 24px;
  font-weight: 700;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;