const app = Vue.createApp({
    data() {
        return {
            message: ''
        };
    }, 
    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },
        charCount() {
            return this.htmlOutput.replace(/<[^>]*>/g, '').length;
        }
    }
});



app.mount('#app');