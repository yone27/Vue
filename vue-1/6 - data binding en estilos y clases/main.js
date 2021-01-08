new Vue({
    el: 'body',
    data: {
        'azul': true,
            'subrayado': false,
        objClases: {
            'azul': true,
            'subrayado': true
        },
        listaClases: {
            azul: 'azul',
            subrayado: 'subrayado'
        },
        //estilos inline
        colorFuente: 'green',
        tamanoFuente: '60px',

        //estilos directos a traves de obj
        objEstilos: {
            color: 'green',
            fontSize: '60px'
        },

        //estilos directos a traves de obj
        objEstilos2: {
            textDecoration: 'underline',
            transform: 'rotate(30deg)'
        },

        //color
        color:''
    }
})