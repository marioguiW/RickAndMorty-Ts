// PaginationControls.tsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharactersContext } from '../../context/personagensContext';
import { useFetch } from '../../hooks/useFetch';


const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
`;

const PaginationControls: React.FC = () => {
  const { info, setEndpoint } = useContext(CharactersContext)!;

  return (
    <Container>
      <Button onClick={()=> info.prev && setEndpoint(info.prev)} disabled={!info.prev}>
        Anterior
      </Button>
      <Button onClick={()=> info.next && setEndpoint(info.next)} disabled={!info.next}>
        Próximo
      </Button>
    </Container>
  );
};

export default PaginationControls;
