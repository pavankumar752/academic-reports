// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <ContentContainer>
          <h2>Welcome to the Home Page</h2>
          <Table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Exams</td>
                <td>List of all exams</td>
              </tr>
              <tr>
                <td>Exam Types</td>
                <td>List of exam types</td>
              </tr>
              <tr>
                <td>Subjects</td>
                <td>List of subjects</td>
              </tr>
              <tr>
                <td>Students</td>
                <td>List of students</td>
              </tr>
              <tr>
                <td>Report Cards</td>
                <td>List of report cards</td>
              </tr>
            </tbody>
          </Table>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default Home;
