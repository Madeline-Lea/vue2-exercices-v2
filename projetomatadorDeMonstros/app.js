new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 50,
    enemyLife: 100,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.enemyLife == 0;
    },
  },
  methods: {
    gameStart: function()  {
      const thisAgain = this;
      thisAgain.running = true;
      thisAgain.playerLife = 100;
      thisAgain.enemyLife = 100;
    },
  },
});
