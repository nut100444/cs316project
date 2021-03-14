<template>
  <div class="container">
    <b-card id="warning">
      <h1>Payments</h1>
      <div class="row">
        <b-label class="col-3">Username: </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="UN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">CusFn: </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="CF"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">CusLn : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="CL"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">paymentsDate : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="PD"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesNumber : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Amount : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="AM"></b-input>
      </div>
      <br />
      <b-button variant="danger" @click="addData()">Assent</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      Username: "",
      CusFn: "",
      CusLn: "",
      paymentsDate: "",
      EmployeesNumber: "",
      Amount: "",
    };
  },
  methods: {
    addData() {
      alert("compelet");
      const data = {
        Username: this.UN,
        CusFn: this.CF,
        CusLn: this.CL,
        paymentsDate: this.PD,
        EmployeesNumber: this.EN,
        Amount: this.AM,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function () {
          console.log("Ducument successfully written! -> MyFrom");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      const dataText = {
        EmployeesImage: this.EI,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Ducument successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
