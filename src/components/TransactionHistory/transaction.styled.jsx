import styled from 'styled-components'

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  text-align: center;

  thead {
    background-color: #aeecff;
    
  }

  tbody tr:nth-child(odd) {
  background-color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #d2d2d0;
}

`

