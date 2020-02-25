import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  fetchTodos: async function({ commit }) {
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
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, newTodo) => (state.todos = [newTodo, ...state.todos])
};

export default {
  state,
  getters,
  actions,
  mutations
};
