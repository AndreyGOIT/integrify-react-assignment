import axios from 'axios';

export async function fetchCountries() {
  const response = await axios('https://restcountries.com/v3.1/all');
  console.log(response.data);
  return response.data;
}
// const KEY = '1eb36deae800d0e3d9fd1b0466458d26';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/';
// export async function fetchTrending() {
//   const response = await axios(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26'
//   );
//   return response.data.results;
// }

// export async function fetchEvents() {
//   const response = await axios(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26'
//     // {
//     //   params: {
//     //     media_type: 'movie',
//     //     time_window: 'day',
//     //     apikey: KEY,
//     //     //   size: 20,
//     //   },
//     // }
//   );
//   console.log(response.data.results);
//   return response.data.results;
// }