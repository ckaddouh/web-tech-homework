const app = Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light'
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
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
        
            document.documentElement.setAttribute('data-bs-theme', this.theme);
        }
    },
    watch: {
        message(newValue) {
            localStorage.setItem('markdownText', newValue);
        },
        theme(newTheme) {
            localStorage.setItem('theme', newTheme);
        
            document.documentElement.setAttribute('data-bs-theme', newTheme);
        }
    },
    mounted() {
        const saved = localStorage.getItem('markdownText');
        if (saved) {
            this.message = saved;
        }
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.theme = savedTheme;
        }

        document.documentElement.setAttribute('data-bs-theme', this.theme);
    }

})



app.mount('#app');