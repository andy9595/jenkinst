// import Vue from 'vue'
import axios from 'axios'


const instance = axios.create({
    // baseURL: 'http://localhost:8080',
    // baseURL: 'http://192.168.43.132:8080/',
    // baseURL: 'http://192.168.0.104:8080',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json; charset=utf-8', }
});

export default instance