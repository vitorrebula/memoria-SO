import React, { useState } from "react";
import * as styled from './EscalonamentoFIFO.styles';

interface Step {
  memory: number[];
  page: number;
  fault: boolean;
}

export function FIFOComponent() {
  const [input, setInput] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);
  const [slots, setSlots] = useState<number>(3);
  const [pageFaultCount, setPageFaultCount] = useState<number>(0);

  const handleFIFO = () => {
    const pages = input.split(",").map((num) => parseInt(num.trim()));
    const memory: (number | null)[] = Array(slots).fill(null);
    const result: Step[] = [];
    let oldestIndex = 0;
    let pageFaultCount = 0;

    pages.forEach((page) => {
      if (!memory.includes(page)) {
        memory[oldestIndex] = page;
        oldestIndex = (oldestIndex + 1) % slots;
        result.push({ memory: [...memory] as number[], page, fault: true });
        pageFaultCount++;
      } else {
        result.push({ memory: [...memory] as number[], page, fault: false });
      }
    });

    setPageFaultCount(pageFaultCount);

    setSteps(result);
  };

  return (
    <styled.Container>
      <styled.Title>Escalonamento de Memória FIFO - vitor rebula e maria eduarda</styled.Title>
      <styled.Label>
        Array de páginas (separe por vírgulas):
        <styled.Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Exemplo: 1,2,3,4,1,3,4,6"
        />
      </styled.Label>
      <styled.Label>
        Slots de memória:
        <styled.Input
          type="number"
          value={slots}
          onChange={(e) => setSlots(parseInt(e.target.value))}
          min="1"
          max="10"
        />
      </styled.Label>
      <styled.Button onClick={handleFIFO}>Calcular FIFO</styled.Button>

      <styled.StepsContainer>
        <h4>Passo a passo:</h4>
        <ul>
          {steps.map((step, index) => (
            <styled.StepItem key={index} fault={step.fault}>
              Página: {step.page} | Memória: [{step.memory.join(", ")}] |{" "}
              {step.fault ? "Page Fault" : "Hit"}
            </styled.StepItem>
          ))}
        </ul>
        <styled.FaultCount>Total de Page Faults: {pageFaultCount}</styled.FaultCount>
      </styled.StepsContainer>
    </styled.Container>
  );
};

export default FIFOComponent;
