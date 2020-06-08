<template>
    <div class="home">
        <img class="img-greeting" src="../assets/hola.png"/>
        <h3 class="home-title">Haz entrado con exito al foro de</h3>
        <img class="img-title" src="../assets/regular-enter.png"/>
        <img class="img-title" src="../assets/regular-show.png"/>
        <div :xs="4" class="exit-page">
            <h4 class="go-out">Si te quieres desconectar, aprieta el botón</h4>
            <button :xs="8" class="btn btn-info btn-out" type="danger" @click="logout">Log out</button>
        </div>
    </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push("login");
        });
    }
  }
};
</script>
<style scoped>
/* Cabecera home */
.home {
    text-align: center;
}
.img-greeting {
    display: block;
    margin: auto;
    padding-top: 4em;
}
.home-title, .go-out {
    color: cadetblue;
    padding-top: 1em;
}
.img-title {
    display: block;
    margin: auto;
}
/* Sección de salida */
.exit-page {
    padding: 3em;
}
.btn-out {
    margin-top: 2em;
    border-radius: 2em;
}
</style>