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
            let text = this.message; 
            text = text.replace(/<[^>]*>/g, '');
            return text.length;
        }
    }
})



app.mount('#app');