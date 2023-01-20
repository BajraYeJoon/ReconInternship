<script setup>
import Navbar from "../components/Navbar.vue";

import { computed, ref } from "vue";
import router from "../router/router";
import Button from "../components/Button.vue";

const form = ref({
  date: "",
  amount: 0,
  remarks: "",
});

const initialTotal = ref(0);

const transactions = ref([]);

const debit = () => {
  if (
    form.value.date !== " " &&
    form.value.amount > 0 &&
    form.value.remarks !== ""
  ) {
    transactions.value.push({
      ...form.value,
      type: "debit",
    });
    initialTotal.value -= form.value.amount;
    localStorage.setItem("debited data", JSON.stringify(transactions.value));
    form.value = {
      date: "",
      amount: 0,
      remarks: "",
    };
  }
};

const credit = () => {
  if (
    form.value.date !== " " &&
    form.value.amount > 0 &&
    form.value.remarks !== ""
  ) {
    transactions.value.push({
      ...form.value,
      type: "credit",
    });
    initialTotal.value += form.value.amount;
    localStorage.setItem("credited data", JSON.stringify(transactions.value));
    form.value = {
      date: "",
      amount: 0,
      remarks: "",
    };
  }
};

const calculatedTotal = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    if (transaction.type === "debit") {
      return acc - transaction.amount;
    } else {
      return acc + transaction.amount;
    }
  }, 0);
});

const details = (date) => {
  router.push({ name: "Details", params: { date } });
};
</script>

<template>
  <Navbar />
  <div class="container">
    <h4>Total Balance : {{ calculatedTotal }}</h4>
    <div class="form__container">
      <form @submit.prevent>
        <label for="date"
          >Date:
          <input type="date" v-model="form.date" required />
        </label>
        <label for="amount"
          >Amount:
          <input type="number" v-model="form.amount" required />
        </label>
        <label for="remarks"
          >Remarks:
          <textarea v-model="form.remarks" required />
        </label>
        <div class="buttons">
          <Button name="Add Debit" @click="debit" />
          <Button name="Add Credit" @click="credit" />
        </div>
      </form>
    </div>
  </div>

  <div class="table__container">
    <header>
      <h4>Date</h4>
      <h4>Amount</h4>
      <h4>Remarks</h4>
    </header>

    <div
      v-for="transaction in transactions"
      :key="transaction.id"
      class="transactions"
    >
      <h4 @click="details(transaction.date)">{{ transaction.date }}</h4>
      <h4>{{ transaction.amount }}</h4>
      <h4>{{ transaction.remarks }}</h4>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem 3rem;
}

.container h4 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.form__container {
  margin-bottom: 8px;
  display: flex;
  justify-content: center;

  align-items: center;

  margin: 4rem;
  width: 60%;
}

.form__container form,
.form__container label {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 6px 0;
}

.form__container input {
  padding: 12px;
  width: 100%;
}

.buttons {
  display: flex;
  gap: 15px;
  padding: 1rem 2rem;
}

.table__container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 0 8rem;
}

header {
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
  border-bottom: 1px solid black;
}

.transactions {
  display: flex;

  justify-content: space-between;
}
</style>
