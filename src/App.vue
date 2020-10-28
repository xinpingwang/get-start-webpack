<template>
  <hello-world :msg="msg"></hello-world>
</template>
<script>
import HelloWorld from './HelloWorld.vue';

export default {
  name: 'app',
  components: { HelloWorld },
  data() {
    return {
      msg: 'Hello World'
    };
  }
};
</script>
