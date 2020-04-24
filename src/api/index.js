import axios from "axios";

// const url1 = "https://covid19.mathdro.id/api/countries";
const url = "https://souravcovid19api.herokuapp.com/api";
// const url1 = "https://souravcovid19api.herokuapp.com/state";
// const urldaily = "https://api.covid19india.org/data.json";
export const fetchData = async states => {
  let changeableUrl = url;

  if (states) {
    changeableUrl = `${url}/state/${states}`;
  }
  try {
    const { data } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed: parseInt(data.Confirmed),
      recovered: data.Cured,
      deaths: data.Death
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(urldaily);

//     const modifiedData = data.map(dailyData => ({
//       confirmed: parseInt(dailyData.dailyconfirmed),
//       recovered: parseInt(dailyData.dailyrecovered),
//       deaths: parseInt(dailyData.dailydeceased),
//       date: dailyData.date
//     }));
//     console.log(modifiedData);
//     return modifiedData;
//   } catch (error) {}
// };

export const fetchStates = async () => {
  try {
    const {
      data: { state }
    } = await axios.get(`${url}/state`);
    return state.map(states => states.Name);
    // console.log(data);
  } catch (error) {}
};
