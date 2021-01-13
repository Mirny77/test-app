

export const state = () => ({
    todos: []
})
export const mutations = {
    increment(state, todos) {

        state.todos = todos

    }

}
export const actions = {
   async nuxtServerInit ({commit}, {$axios}) {
         
            const todos = await $axios.$get('https://jsonplaceholder.typicode.com/todos')
            console.log(todos)
            commit('increment', todos)
    
        
      }
   
}