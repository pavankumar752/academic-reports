// src/components/SrichaitanyaReportCards.js
import React, { useState } from 'react';

// Function to generate a list of 1000 unique names
const generateStudentNames = () => {
  const firstNames = ["Aarav", "Meera", "Rohan", "Nisha", "Karthik", "Ananya", "Siddharth", "Sakshi"];
  const lastNames = ["Kumar", "Reddy", "Sharma", "Patel", "Iyer", "Singh", "Das", "Verma"];
  const names = [];

  for (let i = 0; i < 1000; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    names.push(`${firstName} ${lastName}`);
  }

  return names;
};

const generateReportCards = (names) => {
  const schools = [
    "Srichaitanya School - Hyderabad",
    "Srichaitanya School - Vijayawada",
    "Srichaitanya School - Tirupati",
    "Srichaitanya School - Bangalore",
    "Srichaitanya School - Visakhapatnam",
  ];
  const subjects = ["Mathematics", "Science", "English", "Social Studies", "Physical Education"];
  const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D"];

  return names.map(name => {
    const schoolName = schools[Math.floor(Math.random() * schools.length)];
    const studentGrades = {};

    subjects.forEach(subject => {
      studentGrades[subject] = grades[Math.floor(Math.random() * grades.length)];
    });

    return {
      studentName: name,
      schoolName,
      grades: studentGrades,
    };
  });
};

const SrichaitanyaReportCards = () => {
  const studentNames = generateStudentNames();
  const reportCards = generateReportCards(studentNames);

  const [filters, setFilters] = useState({
    studentName: '',
    schoolName: '',
    mathematics: '',
    science: '',
    english: '',
    socialStudies: '',
    physicalEducation: '',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const filteredReportCards = reportCards.filter(report => {
    return (
      report.studentName.toLowerCase().includes(filters.studentName) &&
      report.schoolName.toLowerCase().includes(filters.schoolName) &&
      report.grades.Mathematics.toLowerCase().includes(filters.mathematics) &&
      report.grades.Science.toLowerCase().includes(filters.science) &&
      report.grades.English.toLowerCase().includes(filters.english) &&
      report.grades['Social Studies'].toLowerCase().includes(filters.socialStudies) &&
      report.grades['Physical Education'].toLowerCase().includes(filters.physicalEducation)
    );
  });

  return (
    <div>
      <h1>Srichaitanya School Report Cards</h1>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          name="studentName"
          placeholder="Filter by Student Name"
          onChange={handleFilterChange}
        />
        <input
          name="schoolName"
          placeholder="Filter by School Name"
          onChange={handleFilterChange}
        />
        <input
          name="mathematics"
          placeholder="Filter by Mathematics"
          onChange={handleFilterChange}
        />
        <input
          name="science"
          placeholder="Filter by Science"
          onChange={handleFilterChange}
        />
        <input
          name="english"
          placeholder="Filter by English"
          onChange={handleFilterChange}
        />
        <input
          name="socialStudies"
          placeholder="Filter by Social Studies"
          onChange={handleFilterChange}
        />
        <input
          name="physicalEducation"
          placeholder="Filter by Physical Education"
          onChange={handleFilterChange}
        />
      </div>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Student Name</th>
            <th style={{ border: '1px solid black' }}>School Name</th>
            <th style={{ border: '1px solid black' }}>Mathematics</th>
            <th style={{ border: '1px solid black' }}>Science</th>
            <th style={{ border: '1px solid black' }}>English</th>
            <th style={{ border: '1px solid black' }}>Social Studies</th>
            <th style={{ border: '1px solid black' }}>Physical Education</th>
          </tr>
        </thead>
        <tbody>
          {filteredReportCards.map((report, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black' }}>{report.studentName}</td>
              <td style={{ border: '1px solid black' }}>{report.schoolName}</td>
              <td style={{ border: '1px solid black' }}>{report.grades.Mathematics}</td>
              <td style={{ border: '1px solid black' }}>{report.grades.Science}</td>
              <td style={{ border: '1px solid black' }}>{report.grades.English}</td>
              <td style={{ border: '1px solid black' }}>{report.grades['Social Studies']}</td>
              <td style={{ border: '1px solid black' }}>{report.grades['Physical Education']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SrichaitanyaReportCards;
