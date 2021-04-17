let {log} = console;

// fetch("http://google.com");
fetch("http://localhost:3000/api/hello")
  .then((res) => res.text())
  .then((data) => console.log(data));
