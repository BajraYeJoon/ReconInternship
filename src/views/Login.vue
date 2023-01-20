<script setup>
import { ref } from "vue";
import router from "../router/router";

import Button from "../components/Button.vue";

const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "admin" && password.value === "admin") {
    router.push("/dashboard");
  } else {
    alert("invalid");
  }
};
</script>
<template>
  <div class="form__container">
    <h3 class="title">LOGIN</h3>
    <form @submit.prevent="login" class="form">
      <div class="form__fields">
        <label for="username">Username: </label>
        <input type="text" v-model="username" required />

        <label for="password">Password: </label>
        <input type="password" v-model="password" required />

        <Button name="Login" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.form__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.title {
  font-size: 2rem;
}
.form {
  display: flex;
  flex-direction: column;
  width: 40%;
  overflow: hidden;
}

.form__fields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form__fields label {
  margin-bottom: 10px;
}

.form__fields input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 1rem;
}
</style>
