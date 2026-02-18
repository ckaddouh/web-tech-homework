const app = Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light',
            showInput: true,  
            showOutput: true 
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
        },
        wordCount() {
            let text = this.message.replace(/<[^>]*>/g, '').trim();
            if (!text) return 0;  // empty input
            return text.split(/\s+/).length; // split on whitespace
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
        
            document.documentElement.setAttribute('data-bs-theme', this.theme);
        },
        clearText() {
            this.message = ''; 
            localStorage.removeItem('markdownText'); 
        },
        toggleInput() {
            this.showInput = !this.showInput;
        },
        toggleOutput() {
            this.showOutput = !this.showOutput;
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