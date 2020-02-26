<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <Spinner v-if="isTodoLoading" size='massive' message="Loading..."/> 
    <div v-else class="todos">
      <div
        class="todo"
        :class="{'is-complete': todo.completed}"
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="changeCompletion(todo)"
      >
        {{todo.title}}
        <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos", "isTodoLoading"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    changeCompletion: function(todo) {
      this.updateTodo({
        ...todo,
        completed: !todo.completed
      });
    }
  },
  created: function() {
    this.fetchTodos();
  }
};
</script>

<style lang="scss" scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &.is-complete {
      background: #35495e;
      color: #fff;
    }
    i {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      cursor: pointer;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
}
</style>