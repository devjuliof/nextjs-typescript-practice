"use client";

import { BaseSyntheticEvent } from "react";
import React from "react";

export default function Home() {
  interface UserData {
    nome: string;
    email: string;
    cpf: string;
  }

  const [userData, setUserData] = React.useState<UserData>({
    nome: "",
    email: "",
    cpf: "",
  });

  React.useEffect(() => {
    const userDataFromLocal = localStorage.getItem("user data");
    if (userDataFromLocal) {
      const userData: UserData = JSON.parse(userDataFromLocal);
      const nome = document.getElementById("nome") as HTMLInputElement;
      const email = document.getElementById("email") as HTMLInputElement;
      const cpf = document.getElementById("cpf") as HTMLInputElement;
      nome.value = userData.nome;
      email.value = userData.email;
      cpf.value = userData.cpf;
    }
  });

  React.useEffect(() => {
    localStorage.setItem("user data", JSON.stringify(userData));
  }, [userData]);

  interface Window {
    UserData: object;
  }

  const handleKeyUp = ({ target }: BaseSyntheticEvent) => {
    const { id, value } = target;
    switch (target.id) {
      case "nome":
        setUserData((prevUserData) => ({
          ...prevUserData,
          [id]: value,
        }));
        userData.nome = target.value;
        break;
      case "email":
        setUserData((prevUserData) => ({
          ...prevUserData,
          [id]: value,
        }));
        break;
      case "cpf":
        setUserData((prevUserData) => ({
          ...prevUserData,
          [id]: value,
        }));
        break;
    }
  };

  return (
    <form
      action=""
      id="form"
      style={{ display: "flex", flexDirection: "column", width: "400px" }}
      onKeyUp={handleKeyUp}
    >
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" style={{ height: "48px" }} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" style={{ height: "48px" }} />
      <label htmlFor="cpf">CPF</label>
      <input type="text" id="cpf" name="cpf" style={{ height: "48px" }} />
    </form>
  );
}
