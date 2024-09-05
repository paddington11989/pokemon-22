import { useState } from "react";
import "./first.css";
import { useEffect } from "react";
import axios from "axios";

const MyPokemon = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
          setData(response.data.results); // Доступ к массиву покемонов через results
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
  
    return (
      <div>
        <div className="block">
          <ul className="pokemon-list">
            {data.map((pokemon, index) => (
              <li className="pokemon-item" key={index}>
                <a className="pokemon-url">
                  {pokemon.name}
                </a>
                <img src={pokemon.url} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default MyPokemon;