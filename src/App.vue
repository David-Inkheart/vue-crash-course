<template>
  <div class="container">
    <Header title="Task Tracker"/>
    <Tasks :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: []
    };
  },
    created() {
      this.tasks = [
        {
          id: 1,
          text: "Eleanor's Paediatrician Appointment",
          day: 'March 13th at 1:30pm',
          reminder: true,
        },
        {
          id: 2,
          text: 'Dinner with Sunflower',
          day: 'March 14th at 6:30pm',
          reminder: true,
        },
        {
          id: 3,
          text: "Book club watch party",
          day: 'March 17th at 8:30pm',
          reminder: false,
        },
        {
          id: 4,
          text: "Metre repair",
          day: 'March 22nd at 9:00am',
          reminder: false,
        },
  ]
    }
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: blue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
 } 

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

</style>
