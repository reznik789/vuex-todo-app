<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Add Todo..." />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data: function() {
    return {
      title: ""
    };
  },
  methods: { 
    onSubmit: function(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
    ...mapActions(["addTodo"])
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }
}
</style>