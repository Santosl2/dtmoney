import { useState } from "react";
import { Container, Content } from "./styles";

import ReactModal from "react-modal";

import logoImg from "../../assets/logo.svg";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
