// import axios from "axios";
import LocalData from "./data.json";

export const getDataAPI = () => {
  //   const rawData = axios.get("https://www.algoexpert.io/api/fe/questions");

  //   setTimeout(() => {
  const mapData = {};
  LocalData.forEach((gd) => {
    if (!mapData[gd.category]) {
      mapData[gd.category] = [];
    }
    mapData[gd.category].push(gd);
  });
  return Object.entries(mapData);
  //   }, 1000);
};
