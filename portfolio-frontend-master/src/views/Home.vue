<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="section">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A architecto perferendis reiciendis, ex, cum id veritatis maiores eligendi commodi consectetur sapiente quos iusto explicabo nesciunt error voluptatibus dicta aperiam quo!
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
