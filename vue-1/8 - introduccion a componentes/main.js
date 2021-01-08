Vue.component('cita', {
    template: '#cita',
    ready: function() {
        this.elegirCita()
    },
    data: function (){
        return {
            votos: '',
            citaElegida: '',
            citas: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit - Yone',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit - Frank',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit - Juan',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit - Jose',
            ]
        }      
    },
    methods: {
        elegirCita: function(){
            var cita = this.citas[Math.floor(Math.random()*this.citas.length)]
            this.citaElegida = cita;
        },
        sumarVoto: function(){
            this.votos++
        },
        restarVoto: function(){
            if(this.votos > 0)
                this.votos--
        }
    }
})

new Vue({
    el: 'body'
    
})