<template>
  <div id="login">
    <h1 class="title">Bienvenid@ al Foro REGULAR SHOW</h1>
    <img class="img-header" src="../assets/show-icon.png"/>
    <h3 class="sub-title">Ingresa tus dalos aquí</h3>
    <form labwidth="100px" class="form-login" :model="formLabelAlign">
      <input placeholder="Correo electrónico" v-model="formLabelAlign.user">
      <input type="password" placeholder="Contraseña" v-model="formLabelAlign.password" autocomplete="off">
      <button type="primary" class="btn btn-info ingresar-login" @click="login">Ingresar</button>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data() {
    return {
      formLabelAlign: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(
          this.formLabelAlign.user,
          this.formLabelAlign.password
        )
        .then(() => {
            this.$router.push("home");
         }).catch(() => {
           alert('Tus Credenciales no son las Correctas. Ingresalas de nuevo');
         })
    }
  }
};
</script>

<style scoped>
    /* Contenedor login */
    #login {
        text-align: center;
        color: cadetblue;
        padding: 3em;
    }
    /* Titulo */
    .title {
        margin-top: 1em;
    }
    /* Imagen */
    .img-header {
        width: 20em;
        margin: auto;
        display: block;
        padding-top: 2em;
        padding-bottom: 2em;
    }
    /* Formulario */
    .sub-title {
        margin-bottom: 1em;
    }
    .ingresar-login {
        margin-top: 2em;
        border-radius: 2em;
    }
    .img-inicial, .form-login {
        display: block;
        margin: auto;
    }
    .form-login {
        width: 15em;
    }
    .input {
        margin-bottom: 1em;
    }
</style>