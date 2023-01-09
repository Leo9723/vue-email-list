const {
    createApp
} = Vue;
createApp({
    data() {
        return {
            NewEmail: []
        }
    },
    mounted() {
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.NewEmail.push(result.data.response);
            });
        }
    },
}).mount('#app')