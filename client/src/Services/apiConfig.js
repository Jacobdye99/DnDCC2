import axios from "axios";

const rubyUrl = 'http://localhost:3000'

const dndUrl = 'https://www.dnd5eapi.co/api/'

export const api = axios.create({
    baseURL: rubyUrl
})

export const dndApi = axios.create({
    baseURL: dndUrl
})