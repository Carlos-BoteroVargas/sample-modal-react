import React, { useState } from 'react'
import styled from 'styled-components';
import './App.css';
import Modal from './components/Modal';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #191919;
  color: seashell;
  font-size: 24px;
  cursor: pointer;
`

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  
  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm a Modal!!</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
