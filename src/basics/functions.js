const  axios  = require("axios");

const functions = {
    add : (num1, num2) => num1+num2,
    isNull : () => null,
    checkValue : x => x,
    createUser: () => {
        const user = { firstName: 'Sheba' };
        user['lastName'] = 'Jose';
        return user;
      },
      fetchUser: () => {
      return axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
      },
      fetchData: () => {
        return 'Sheba'
      }
      
}

module.exports = functions;