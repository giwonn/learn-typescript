// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * @typedef {object} Data
 * @property {User} data
 */
/**
 * @returns {Promise<Data>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  // axios
  // .get(url)
  fetchUser()
    .then(function (response) {
      user = response.data;
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();