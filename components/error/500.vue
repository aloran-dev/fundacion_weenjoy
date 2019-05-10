<template>
  <div class="error-500">
    <h1>Error en el servidor</h1>
    <p>Comprueba tu conexión e intenta de nuevo más tarde.</p>
  </div>
</template>

<script>
  export default {
    name: 'error-500',
    props: {
      error: {
        type: Object,
        default: () => { },
      },
    },
  };
</script>
