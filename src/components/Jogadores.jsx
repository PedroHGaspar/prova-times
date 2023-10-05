import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

function Jogadores() {
  const [jogadores, setJogadores] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchJogadores() {
      try {
        const response = await axios.get(
          `https://api.cartola.globo.com/atletas/mercado/${id}`
        );
        const jogadoresData = response.data.atletas;

        if (Array.isArray(jogadoresData)) {
          const updatedJogadoresData = jogadoresData.map((player) => ({
            ...player,
            foto: player.foto.replace("FORMATO", "220x220"),
          }));
          setJogadores(updatedJogadoresData);
          // console.log(updatedJogadoresData);
          // console.log(jogadoresData)
          // console.log(player)
        }
        //Array.array é usado pra determinar o valor de um array.
        //retorna verdadeira se for array e falso se n for.
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    fetchJogadores();
  }, [id]);

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
        <div>
          <span className="nome-times-jogadores">Jogadores do Grêmio</span>
        </div>
        {jogadores.map((player) => (
          <li className="nome-jogador-e-foto" key={player.atleta_id}>
            <div>
              <img
                className="img-jogador"
                src={player.foto}
                alt={player.apelido}
              />
            </div>
            {player.apelido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jogadores;
