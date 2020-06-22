new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      title: '',
      time: null,
    }
  },
  
  computed: {
    totalTime(){
      var tiempoCalc = 0;
      for (i=0; i<this.courses.length; i++) {
        tiempoCalc = parseInt(tiempoCalc + parseInt(this.courses[i].time))
      }
      
      return tiempoCalc
    }
  },

  methods: {
    
    addCourse(){
      let newCourse = { title: this.title, time: this.time }
      this.courses.push(newCourse)
      this.title = ''
      this.time = null
    }


  }
})