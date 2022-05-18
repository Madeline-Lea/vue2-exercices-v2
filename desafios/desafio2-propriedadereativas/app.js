new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado: function () {
      return this.valor === 37 ? "Valor igual" : "Valor diferente.";
    },
  },
  watch: {
    resultado(newbie, old) {
      console.log(newbie, old);
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
});
