new Vue({
  el: "#desafio",
  data: {
    valor: "",
    value: ""
  },
  methods: {
    showAAlert: function () {
      alert("Oh, look you clicked in an alert button.");
    },
    typingAsYou: function (ev) {
        this.valor = ev.target.value;
    },
    typingAsYou2: function (ev) {
    
        this.value = ev.target.value;
    },
  },
});
