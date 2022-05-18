new Vue({
  el: "#desafio",
  data: {
    name: String("Leonardo"),
    age: Number(19),
    imageGLR: 'https://mlwniakau98d.i.optimole.com/Z2klzd8-NT9vreKH/w:auto/h:auto/q:mauto/f:avif/https://www.nintendoreporters.com/storage/files/team-sonic-racing-green-light-ride-theme.jpg'
  },
  methods: {
    ageMultipledByThree: (a, b) => {
      a = Number(19);
      b = Number(3);
      return a * b;
    },
    callingMath: (math) => {
      math = Math.random(0);
      return math;
    },
  },
});
