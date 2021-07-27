const vueInstance = new Vue({
  
    data: {
        birthTime: 'April 10 2021 01:00:00 GMT',
        seconds: '',
        minutes: '',
        hours: '',
        days: '',
        years: '',
        dateToday: ''       
    },

    methods: {
        calculateAge: function(currentTime) {
            const total = Date.parse(currentTime) - Date.parse(this.birthTime);
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
            const years = Math.floor( total/(1000*60*60*31*365) );
            
            this.seconds = seconds;
            this.minutes = minutes;
            this.hours = hours; 
            this.days = days;
            this.years = years;
            this.dateToday = currentTime;
        }
      },

    mounted() {
        setInterval(() => {
            this.calculateAge(new Date);
        }, 1000);
    }
});
  
vueInstance.$mount('#app');
