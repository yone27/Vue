new Vue({
    el: 'body',
    data: {
        nombre: 'yone'
    },
    methods: {
        saludar: function( e){
            alert('buenas tardes '+ this.nombre)
            console.log(e);
        },
        enviar: function(e){
            e.preventDefault()
            alert('enviando form')
        },
        teclaPulsada: function(e){
            console.log(e.code);
        }
    }
})