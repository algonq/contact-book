<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>📖 My Contact Book</h1>
    </header>

    <!-- Navigation Links -->
    <nav>
      <router-link to="/">🏠 Home</router-link>
      <router-link to="/add">➕ Add Contact</router-link>
    </nav>

    <!-- Display the current route's component -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* General Styles */
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #333;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

/* Header Styles */
header {
  margin-bottom: 20px;
}

h1 {
  color: #fff;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Navigation Styles */
nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

router-link {
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #6a89cc;
  border-radius: 20px;
  transition: transform 0.2s, background-color 0.2s;
}

router-link:hover {
  background-color: #4a69bd;
  transform: scale(1.1);
}

/* Main Content Styles */
main {
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>
