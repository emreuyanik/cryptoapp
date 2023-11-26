import "./scss/style.scss";

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoinData();
  e.target.reset();
});

const getCoinData = async () => {
  const input = document.querySelector("header form input").value;

  const API_KEY = "coinrankingc79306ac9b7164eb11965dd12386df1e8dab51288f466ddb";

  const options = {
    headers: {
      "x-access-token": API_KEY,
    },
  };

  url = `https://api.coinranking.com/v2/coins?search=${input}`;

  const res = await fetch(url, options);
  const json = await res.json();
};
