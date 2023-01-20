<template>
  <button type="submit">{{ name }}</button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  name: {
    type: String,
  },
});
</script>

<style scoped>
button {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  font-weight: bold;
  text-transform: uppercase;

  color: white;
  background-color: rgb(19, 19, 17);
}

button:hover {
  background-color: black;
  cursor: pointer;
}
</style>
