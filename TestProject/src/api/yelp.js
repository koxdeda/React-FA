import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer UANJvEAKB9cOMdQ6i2bCUEwL06W2myiLUw-yuU3_AqGbqumRqm74KuN4Lvvcp-FoID_is_cUcDM2fK0zKg63W5EOmZpmvsgCIme8zXgxjfcfxU_-ZnAImOgeRdOiXnYx',
    }


});

