async function getCities() {
  try {
    const res = await fetch('http://localhost:3000/cities.json');
    const cities = await res.json();

    return cities;
  } catch (e) {
    throw new Error(e);
  }
}

export default getCities;
