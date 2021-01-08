Vue.filter('formal', function(value, hombre) {
    let titulo = hombre ? 'Sr. ' : 'Sra. ';
    return titulo+value.split(' ').reverse().join(', ')
})

new Vue({
    el: 'body',
    data: {
        miNombre: 'Yoneiker Gonzalez',
        datos: {
            nombre: 'yone',
            profesion: 'dev'
        }
    }
})