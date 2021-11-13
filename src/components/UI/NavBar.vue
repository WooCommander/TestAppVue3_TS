<template>
  <header class="header">
    <div class="header__contanier container">
      <div class="header__logo">Test App</div>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="" class="menu__link" @click="$router.push('/')">Главная</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link" @click="$router.push('/main')"
              >Посты</a
            >
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link" @click="$router.push('/about')"
              >О нас</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "NavBar",
})
export default class NavBar extends Vue {}
</script>


<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(83, 146, 218);
  color: rgb(22, 22, 22);
  align-items: center;
  z-index: 10;
}

.header__contanier {
  display: flex;
  min-height: 65px;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 32px;
  font-weight: 900;
  cursor: pointer;
}

.menu {
  padding: 5px 0;
}

.menu__list {
  display: flex;
}

.menu__item:not(:last-child) {
  margin: 0 25px 0 0;
}

.menu__link {
  font-weight: 600;
  line-height: 65px;
}

@media (max-width: 479px) {
  .header__logo {
    font-size: 24px;
  }
  .menu__link {
    font-size: 16px;
  }
  .menu__item:not(:last-child) {
    margin: 0 15px 0 0;
  }
}
@media (max-width: 359px) {
  .header__logo {
    font-size: 22px;
  }
  .menu__link {
    font-size: 14px;
  }
  .menu__item:not(:last-child) {
    margin: 0 10px 0 0;
  }
}
</style>