import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.ip.da.sua.maquina",
});

export { api };
