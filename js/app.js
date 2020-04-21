

new Vue({
    el: '#app',
    data: {
        message: 'Salut tout le monde !',
        link: 'https://www.youtube.com/grafikart',
        success: false,
        entree: 'Your are welcome',
        close: true
    },
    methods: {
        reverseText: function () {
            this.message = this.message.split('').reverse().join('')
        },

        changeMessage: function () {
            if(this.success){
                this.success = false
            }else{
                this.success = true
            }
        },

        closeLabel: function () {
            this.entree = "Closed"
            this.close = false
        }

    }
})