import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Title = styled.h3`
  text-align: center;
  color: #333;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  &:focus {
    border-color: #666;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 15px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const StepsContainer = styled.div`
  margin-top: 20px;
`;

export const StepItem = styled.li<{ fault: boolean }>`
  list-style-type: none;
  padding: 8px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.fault ? "#f8d7da" : "#d4edda")};
  color: ${(props) => (props.fault ? "#721c24" : "#155724")};
  border: 1px solid ${(props) => (props.fault ? "#f5c6cb" : "#c3e6cb")};
  border-radius: 4px;
`;

export const FaultCount = styled.div`
  margin-top: 15px;
  font-weight: bold;
  color: #333;
`;