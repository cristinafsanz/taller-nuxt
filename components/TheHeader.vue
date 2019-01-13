<template>
  <header :style="{ backgroundColor: backgroundColor }">
    <div class="logo">
      <img src="~assets/images/wecodefy-logo.png" >
    </div>
  </header>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            required: false,
            default: '#fff',
        },
    },
};
</script>

<style>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  margin-left: 2rem;
}
</style>
