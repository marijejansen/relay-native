import axios from "axios";

const base = 'https://swimrelaycalculations.azurewebsites.net';
const baseURL = `${base}/api`;

export default axios.create({
  baseURL,
  headers: {}
});