console.log(location.search); // Lee los argumentos pasados a este formulario
var id = location.search.substr(4);
console.log(id);

const { createApp } = Vue;
createApp({
  data() {
    return {
      id: 0,
      username: "",
      firstname: "",
      lastname: "",
      birthdate: "",
      email: "",
      url: 'https://JuanDualibe15.pythonanywhere.com/usuarios/' + id,
      error: false, // Agrega la propiedad error con valor inicial false
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.id = data.id;
          this.username = data.username;
          this.firstname = data.firstname;
          this.lastname = data.lastname;
          this.birthdate = data.birthdate;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let usuario = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        birthdate: this.birthdate,
        email: this.email,
      };

      var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      fetch(this.url, options)
        .then(() => {
          alert("Registro modificado");
          window.location.href = "./usuarios.html";
        })
        .catch(err => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');

