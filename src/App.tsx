import { useState } from "react";
import "./App.css"; // Importando o CSS externo


/* Exercicio 1

export default function App() {
  return <Contador />;
}

function Contador() {
  const [nros, setNros] = useState<number[]>([]);
  const [quantidadeInput, setQuantidadeInput] = useState("");
  const MAX_NUMEROS = 12;

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      gerarNumeros();
    }
  }

  function gerarNumeros() {
    let quantidade = Number(quantidadeInput);

    if (isNaN(quantidade) || quantidade <= 0 || quantidade > MAX_NUMEROS) {
      alert("Digite um número válido!");
      return;
    }

    quantidade = Math.min(quantidade, MAX_NUMEROS); // Limita a 12 números
    const novosNumeros: number[] = [];

    while (novosNumeros.length < quantidade) {
      const nro = aleatorio();
      if (!novosNumeros.includes(nro)) {
        novosNumeros.push(nro);
      }
    }

    setNros(novosNumeros.sort((a, b) => a - b));
  }

  return (
    <div className="container">
      <h2>Exercício 1</h2>

      <input
        type="number"
        min="1"
        max="12"
        value={quantidadeInput}
        onChange={(e) => setQuantidadeInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite e pressione Enter"
      />

      <div className="numeros-container">
        {nros.map((item, index) => (
          <Ball key={index} numero={item} />
        ))}
      </div>
    </div>
  );
}

// Componente Ball para exibir cada número dentro de um círculo
function Ball({ numero }: { numero: number }) {
  return <div className="ball">{numero}</div>;
}

// Função para gerar um número aleatório entre 0 e 99
function aleatorio() {
  return Math.floor(Math.random() * 100);
}*/



//Exercicio 2

export default function App() {
  return <Contador />;
}

function Contador() {
  const [nros, setNros] = useState<number[]>([]);
  const [numeroInput, setNumeroInput] = useState("");
  const MAX_NUMEROS = 12;

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      adicionarNumero();
    }
  }

  function adicionarNumero() {
    let numero = Number(numeroInput);

    if (isNaN(numero) || numeroInput.trim() === "") {
      alert("Digite um número válido!");
      return;
    }

    setNros((prevNros) => {
      const novaLista = [...prevNros, numero];

      // Se passar de 12 números, remove o primeiro
      if (novaLista.length > MAX_NUMEROS) {
        novaLista.shift();
      }

      return novaLista;
    });

    setNumeroInput(""); // Limpa o input
  }

  function removerNumero(index: number, event: React.MouseEvent) {
    event.preventDefault(); // Evita abrir o menu de contexto do navegador

    setNros((prevNros) => prevNros.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h2>Exercício 2</h2>

      <input
        type="number"
        value={numeroInput}
        onChange={(e) => setNumeroInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite e pressione Enter"
      />

      <div className="numeros-container">
        {nros.map((item, index) => (
          <Ball key={index} numero={item} onRightClick={(e) => removerNumero(index, e)} />
        ))}
      </div>
    </div>
  );
}

// Componente Ball para exibir cada número dentro de um círculo
function Ball({ numero, onRightClick }: { numero: number; onRightClick: (event: React.MouseEvent) => void }) {
  return (
    <div className="ball" onContextMenu={onRightClick}>
      {numero}
    </div>
  );
}
