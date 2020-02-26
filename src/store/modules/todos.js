import axios from "axios";

const state = {
  todos: [],
  loading: false,
  error: null
};

const getters = {
  allTodos: state => state.todos,
  isTodoLoading: state => state.loading
};

const actions = {
  fetchTodos: async function({ commit }) {
    commit("setLoading", true);
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
  },
  addTodo: async ({ commit }, title) => {
    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );
    commit("newTodo", response.data);
  },
  deleteTodo: async ({ commit }, id) => {
    await axios.delete(
      `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit("removeTodo", id);
  },
  filterTodos: async ({ commit }, limit) => {
    commit("setLoading", true);
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data.slice(0, limit));
  },
  updateTodo: async ({ commit }, updTodo) => {
    const response = await axios.put(
      `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );
    commit("commitUpdate", response.data);
  }
};

const mutations = {
  setLoading: (states, loadingState) => (state.loading = loadingState),
  setTodos: (state, todos) => {
    state.todos = todos;
    state.loading = false;
  },
  newTodo: (state, newTodo) => (state.todos = [newTodo, ...state.todos]),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  commitUpdate: (state, updTodo) => {
    state.todos = state.todos.map(todo => {
      if (updTodo.id === todo.id) return updTodo;
      return todo;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
