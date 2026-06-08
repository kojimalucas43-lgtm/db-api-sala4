import s from "./App.module.css";
import { Card } from "./components/card";
import { api } from "./constants/api";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");
  const [inputPage, setInputPage] = useState("");

  useEffect(() => {
    const carrega = async () => {
      try {
        const response = await api.get(`/characters/?page=${page}`);
        setData(response.data.items);
      } catch (error) {
        console.error("Deu ruim!!! ", error);
      }
    };
    carrega();
  }, [page]);

  return (
    <>
      <div className={s.top}>
        <img className={s.logo} src="https://www.einerd.com/wp-content/uploads/2025/09/unnamed-6-e1758722262134.png" alt=""/>
        <label htmlFor="">Choose Page</label>
        <input
          type="number"
          placeholder="Input the page"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
        />

        <button onClick={() => setPage(Number(inputPage))}>Filter</button>
      </div>
      <main>
        <div className={s.pessoasGridResenhuda}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  nome={item.name}
                  especie={item.race}
                  ki={item.ki}
                  maxki={item.maxKi}
                  imagem={item.image}
                  gender={item.gender}
                  affiliation={item.affiliation}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
