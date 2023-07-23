import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (currentNumber === '0' ? num : prev + num));
  };

  const handleOperator = (operator) => {
    if (currentNumber !== '0' && firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }
    setOperation(operator);
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      const firstNum = Number(firstNumber);
      const currentNum = Number(currentNumber);

      switch (operation) {
        case '+':
          setCurrentNumber(String(firstNum + currentNum));
          break;
        case '-':
          setCurrentNumber(String(firstNum - currentNum));
          break;
        case '*':
          setCurrentNumber(String(firstNum * currentNum));
          break;
        case '/':
          setCurrentNumber(String(firstNum / currentNum));
          break;
        default:
          break;
      }

      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleDot = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber((prev) => prev + '.');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperator('*')} />
          <Button label="/" onClick={() => handleOperator('/')} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." onClick={handleDot} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperator('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperator('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
