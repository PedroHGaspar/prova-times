import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    async function fetchTimes() {
      try {
        const dataTimes = await axios.get(
          "https://api.cartola.globo.com/clubes"
        );
        const allDataTimes = dataTimes.data;

        const timesArray = Object.values(allDataTimes);
        // object.keys serve pra pegar os indices de cad aitem no objeto, no caso nao é necessario agora

        const todosTimes = timesArray.filter((time) => time.id !== 1); //tirar o time com id 1

        console.log("TIMES ARRAY", timesArray);
        console.log("ALLDATATIMES", allDataTimes);

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
      <div>
        <img
          className="img-cartola"
          src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"
          alt=""
        />
      </div>
      <ul className="estilo-ul-lista-times">
        {times.map((time) => (
          <li key={time.id}>
            <Link to={`/jogador/${time.id}`}>
              <div className="time-items-list">
                <div>
                  <img
                    className="time-img-escudo"
                    src={time.escudos["30x30"]}
                    alt={`${time.nome} Escudo`}
                  />
                </div>
                <div className="nome-apelido-times">
                  <span className="nome-time">{time.nome}</span>
                  <span className="apelido-time">{time.apelido}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Times;
