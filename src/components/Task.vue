<template>
  <div
    @dblclick="
      $emit('toggle-reminder', task.id);
      $emit('getReminderStatus');
    "
    :class="['task', task.reminder ? 'reminder' : 'done']"
  >
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
    <p>
      {{ getReminderStatus }}
      <i @click="onUpdate(task.id)" class="fas fa-plus"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
    onUpdate(id) {
      this.$emit("update-task", id);
    },
  },
  computed: {
    getReminderStatus(id) {
      return this.task.reminder ? "undone" : "done";
    },
  },
};
</script>

<style scope>
.fas {
  color: red;
}
.fa-plus {
  color: teal;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task:hover {
  padding: 10px;
  background-color: #e0e0e0;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid red;
}
.done {
  border-left: 5px solid #008080;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
