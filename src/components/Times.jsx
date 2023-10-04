import React, { useEffect, useState } from "react";
import axios from "axios";

function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    async function fetchTimes() {
      try {
        const response = await axios.get(
          "https://api.cartola.globo.com/clubes"
        );
        const timesData = response.data;
        console.log("Times:", timesData);

        const timesArray = Object.values(timesData);
        // object.keys seria bom tambem mas nao faria sentido aqui se nao é pra pegar chave nenhuma

        const todosTimes = timesArray.filter((time) => time.id !== 1);

        if (Array.isArray(todosTimes)) {
          setTimes(todosTimes);
        } else {
          console.error("Deu erro");
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    fetchTimes();
  }, []);

  return (
    <div>
      <h1>Lista de Times</h1>
      <ul>
        {times.map((time) => (
          <li key={time.id}>
            <div>
              <span>{time.nome}</span>
              <span>{time.apelido}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Times;
