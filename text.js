var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 9L0XxHNnQJiXPX5w0XuGqhOYZXx0CwmKc9sOc00ApKSApzvm0Etd3WpzKJL4T3zDRv0BotBJrUlPcHx140lZirnebjVbI45MD6KPNziXR1s1hXt2g51db7EwOhBdYHYx");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.yelp.com/v3/businesses/search?location=los%20angeles", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));