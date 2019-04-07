var app = new Vue({
    el: '#app',
    data: {
        a: 1,
        b: "0",
        c: "0"
    },
    computed: {
        D: function () {
             return this.b * this.b - 4 * this.a * this.c;
        }
    },
    methods: {
        graph: functionPlot({
            target: '#plot',
            data: [{
                fn: `x^2 + (${this.b}) * x + (${this.с})`
            }],
            grid: true
        })
    }
  })
