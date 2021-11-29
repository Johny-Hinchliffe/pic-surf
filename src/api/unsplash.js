import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2FWjk7VXbAmUk81uBMStIG4CtpBhREuTJcMjcE_VHnY',
    },
})