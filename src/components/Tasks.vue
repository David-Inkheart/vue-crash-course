<template>
    <div :key="task.id" v-for="task in tasks">
        <Task :task="task" />
    </div>
</template>

<script>
import Task from './Task'

    export default {
  components: { Task },
        name: 'Tasks',
        props: {
            tasks: Array
        },
        components: {
            Task
        },
    }
</script>Task