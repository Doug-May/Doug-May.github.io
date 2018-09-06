let app = new Vue ({
    el: '#app',
    data: {
        hour: 0,
        minute: 0,
        second: 0,
        isPM: false,
        greeting: ''
    },
    computed: {
        hourRotation: function() {
            return this.hour*30 + this.minute/2;
        },
        minuteRotation: function() {
            return this.minute*6 + this.second/10;
        },
        secondRotation: function() {
            return this.second*6;
        }
    },
    methods: {
        updateTime: function () {
                //Get the current time
                var time = new Date();
                this.hour = time.getHours();
                this.minute = time. getMinutes();
                this.second = time. getSeconds();
                //Update the greeting
                if(this.hour >= 0 && this.hour < 6) {
                    this.greeting = "It's bedtime";
                } else if (this.hour >= 6 && this.hour < 12) {
                    this.greeting = "Good morning";
                } else if (this.hour >= 12 && this.hour < 18) {
                    this.greeting = "Good afternoon";
                } else {
                    this.greeting = "Good evening";
                }
                //Change hours to 12 hour cycle
                if(this.hour>12) {
                    this.isPM = true;
                    this.hour -= 12;
                } else if (this.hour === 0) {
                    this.hour = 12;
                }
        }
    },
    created: function() {
        this.updateTime();
    }
})

setInterval(app.updateTime, 1000);