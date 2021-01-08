new Vue({
    el: '#main',
    data: {
        nombre: '',
        edad: '',
        sexo: '',
        email: ''
    },
    methods: {
        enviarDatos: function () {
            if (this.nombre && this.edad && this.sexo && this.email) {
                alert('enviando mensaje...')
            } else {
                alert('rellena todos los campos!!')
            }
        }
    },

    computed:{
        todaLaInformacion: function() {
            return  this.nombre && this.edad && this.sexo && this.email
        }
    }
})