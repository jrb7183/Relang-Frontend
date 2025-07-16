import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8000"
})

const fetchCons = async () => {
  try {
    const response = await api.get("/cons");
    const constable = response.data["constable"];

    let rows = []
    Object.keys(constable).forEach(title => {
      let row = [{isHeader: true, text: title}]
      row = row.concat(constable[title])
      rows = rows.concat([row])
    });

    const order = ["Consonants", "Nasal", "Plosive", "Affricate", "Fricative", "Sibilant", "Tap", "Trill", "Approximant"];
    rows = rows.sort((manner1, manner2) => {console.log(manner1[0]); return order.indexOf(manner1[0]["text"]) - order.indexOf(manner2[0]["text"])});

    return rows
  } catch (error) {
    console.error("Failed fetching consonants", error)
  }
}

const requestCons = async (num) => {
  try {
    await api.post(`/cons?cons_num=${num}`);
    return fetchCons();
  } catch (error) {
    console.error("Failed request for consonants", error)
  }
}

export default requestCons;