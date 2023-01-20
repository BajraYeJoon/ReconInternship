<script setup>
import Button from "./Button.vue";
import router from "../router/router";

const logout = () => {
  router.push("/");
};
</script>

<template>
  <nav>
    <div class="logo">LOGO</div>
    <div class="info">
      <h4>Admin</h4>
      <Button name="logout" class="button" @click="logout" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 3.5rem;
  background-color: black;
  display: flex;
  color: white;
  padding: 1rem;
}

.logo {
  flex: 1;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  gap: 15px;
}

.button {
  background-color: white;
  color: black;
  padding: 8px 10px;
}

.button:hover {
  color: white;
}
</style>
