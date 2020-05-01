// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SearchCountry(props) {
//   const [data, setData] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [result, setResult] = useState('');

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await axios.get('https://restcountries.eu/rest/v2/all');
//   //       setData(res.data);
//   //       setFiltered(res.data);
//   //     } catch (err) {
//   //       throw Error(err);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   // useEffect(() => {
//   //   const getResult = async () => {
//   //     const results = await filtered.filter((res) =>
//   //       res.name.toLowerCase().includes(result.trim())
//   //     );
//   //     setData(results);
//   //   };
//   //   getResult();
//   // }, [result]);

//   const onChange = (e) => {
//     setResult(e.target.value);
//   };

//   // console.log(data);

//   return (
//     <>
//       <p>Search</p>
//       <input
//         type="text"
//         placeholder="Search for a country..."
//         value={result}
//         onChange={onChange}
//       />
//       {/* <ul>
//         {data.map((r, i) => (
//           <li key={i}>{r.name}</li>
//         ))}
//       </ul> */}
//     </>
//   );
// }

// export default SearchCountry;
