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
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};

export default {
  state,
  getters,
  actions,
  mutations
};
