<template>
  <div>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";
export default {
  name: "TodosPage",
  components: {
    Todos,
    AddTodo
  }
};
</script>
