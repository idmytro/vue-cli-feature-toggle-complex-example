<template>
  <div class="HelloWorld" data-variant="2">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.HelloWorld {
  background-color: silver;
}
</style>
