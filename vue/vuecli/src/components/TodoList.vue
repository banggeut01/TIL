<template>
    <div class="todo-list">
        <h2>{{ category }}</h2>
        <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
        <button @click="addTodo">할일 입력!</button> <br>
        <li v-for="todo in todos">
        {{ todo.content }}
        <button @click="removeTodo(todo.id)">삭제</button>
        </li>
    </div>
</template>
<script>
export default {
    props: {
        category: {
         type: String,
         required: true // 항상 필요하다!
        }
      },// 하위컴포넌트로 데이터 전송 + 검증
      data: function() {
        return { // object 리턴!
          todos: [],
          newTodo: ''
        }
      },
      methods: {
        addTodo() {
          this.todos.push({
            id: Date.now(),
            content: this.newTodo, 
          })
          this.newTodo = ''
        },
        removeTodo(removeTodoId) {
          this.todos = this.todos.filter(todo => {
              return removeTodoId !== todo.id
          })
        }
    }
}

</script>

<style lang="">
/* li {
    color: blue;
} */
</style>