import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer 4V0Z946za_Y5yLvUIeuY0wsojRs4XH-BrIlH6F8G53V3bkAQBZf0wOKXxquEOORF12b4svNQkZE7d14XX7aI7vAsDzuN-S98zsLrF9e9DKKPukZ0exlz0xvM2wi-XXYx`
  }
});
