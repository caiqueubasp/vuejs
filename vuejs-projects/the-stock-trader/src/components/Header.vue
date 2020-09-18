<template>
  <div id="principal-header" class="col-sm-6 col-md-4">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="first-container">
      <router-link to="/portifolio" activeClass="active" tag="li"> Portifolio</router-link>
      <router-link to="/stocks" activeClass="active" tag="li"> Stocks </router-link>
    </div>

    <div class="second-container">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          End Day
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save & Load</a>
          <a class="dropdown-item" href="#">Save Data</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
    </div>
  </div>
</template>

<style scoped>
#navbarSupportedContent {
  background-color: rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
}

li {
  list-style-type: none;
  font-size: 2rem;
  cursor: pointer;
}

.col-sm-6 {
  margin-bottom: 50px;
}

#principal-header {
  width: 100%;
  border: 3px solid #cacaca;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.first-container {
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #cacaca;
}

.navbar-nav mr-auto {
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
