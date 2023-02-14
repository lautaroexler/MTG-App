import { useEffect, useState } from "react";
import Single from "./Single";


function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true)


  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aulg&unique=prints"
      );
      const data = await response.json();
      setLoading(false)
      setCards(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="row ">
          {cards.map((card) => {
            return (
              <div className="col-md-3" key={card.collector_number}>
                <Single single={card} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CardList;
