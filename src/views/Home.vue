<template>
  <AddTask v-if="showAddTask" @add-task="addTask" />
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    @update-task="updateTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      const res = await fetch("https://json-api-server-zeta.vercel.app/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(
          `https://json-api-server-zeta.vercel.app/tasks/${id}`,
          {
            method: "DELETE",
          }
        );

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(
        `https://json-api-server-zeta.vercel.app/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updTask),
        }
      );

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      const res = await fetch("https://json-api-server-zeta.vercel.app/tasks");

      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(
        `https://json-api-server-zeta.vercel.app/tasks/${id}`
      );

      const data = await res.json();

      return data;
    },
    async updateTask(id) {
      const taskUpdate = await this.fetchTask(id);
      let text = taskUpdate.text;
      let day = taskUpdate.day;
      const textInput = window.prompt("Update task title:", taskUpdate.text);
      if (textInput !== null) {
        text = textInput;
      }
      const dayInput = window.prompt("Update day and time:", taskUpdate.day);
      if (dayInput !== null) {
        day = dayInput;
      }
      const editTask = {
        ...taskUpdate,
        text: text,
        day: day,
      };

      const res = await fetch(
        `https://json-api-server-zeta.vercel.app/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(editTask),
        }
      );

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, text: data.text, day: data.day } : task
      );
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
