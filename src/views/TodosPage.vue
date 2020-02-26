<template>
  <div>
    <AddTodo />
    <FilterTodos/>
    <Todos />
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import FilterTodos from "@/components/FilterTodos";
import AddTodo from "@/components/AddTodo";
export default {
  name: "TodosPage",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>
