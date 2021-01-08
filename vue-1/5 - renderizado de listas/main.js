new Vue({
    el: 'body',
    data: {
        // objeto
        persona: {
            nombre: 'Yone',
            profesion: 'dev',
            ciudad: 'Caracas',
        },

        //matriz simple
        numeros: [
            1, 2, 3, 4,5
        ],

        //matrices de objetos
        semana: [
            {nombre: 'Lunes', numero:1},
            {nombre: 'Martes', numero:2},
            {nombre: 'Miercoles', numero:3},
            {nombre: 'Jueves', numero:4}
        ]

    }
})