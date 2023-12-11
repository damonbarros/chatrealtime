import axios from "axios";

const api = axios.create({
  baseURL: 'https://6npvxhld-3030.brs.devtunnels.ms/'
})

export { api }