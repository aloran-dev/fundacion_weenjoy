<template>
  <div class="error-404">
    <h1>Esta página no existe</h1>
    <p>El link que clickeaste puede estar roto o ya no existir.</p>
  </div>
</template>

<script>
  export default {
    name: 'error-404',
    props: {
      error: {
        type: Object,
        default: () => { },
      },
    },
  };
</script>
