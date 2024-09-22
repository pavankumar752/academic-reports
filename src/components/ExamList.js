// src/components/ExamList.js
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ExamList = () => {
  const exams = [
    "SAT - Scholastic Assessment Test",
    "ACT - American College Testing",
    "GRE - Graduate Record Examination",
    "GMAT - Graduate Management Admission Test",
    "LSAT - Law School Admission Test",
    "MCAT - Medical College Admission Test",
    "TOEFL - Test of English as a Foreign Language",
    "IELTS - International English Language Testing System",
    "CPA - Certified Public Accountant Exam",
    "CFA - Chartered Financial Analyst Exam",
    "PMP - Project Management Professional Exam",
    "CISSP - Certified Information Systems Security Professional",
    "AWS Certified Solutions Architect",
    "CCNA - Cisco Certified Network Associate",
    "Microsoft Certified: Azure Fundamentals",
    "Final Exams",
    "Midterm Exams",
    "A-Level Exams - Advanced Level",
    "IB Exams - International Baccalaureate",
    "State Board Exams",
    "DELE - Diplomas de Español como Lengua Extranjera",
    "JLPT - Japanese-Language Proficiency Test",
    "CELI - Certificato di Conoscenza della Lingua Italiana",
    "DALF - Diplôme Approfondi de Langue Française",
    "NCLEX-RN - National Council Licensure Examination for Registered Nurses",
    "BAR Exam - for legal professionals",
    "USMLE - United States Medical Licensing Examination",
    "Entrance Exams",
    "Certification in Digital Marketing",
    "Real Estate Licensing Exam"
  ];

  return (
    <div>
      <h1>List of Exams</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>#</TableHeader>
            <TableHeader>Exam Name</TableHeader>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{exam}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExamList;
