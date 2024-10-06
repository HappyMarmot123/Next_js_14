const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Movie() {
  const movie = await getMovies();
  return <h6>{JSON.stringify(movie)}</h6>;
}
