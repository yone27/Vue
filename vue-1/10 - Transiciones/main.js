Vue.transition('ocultar', {
    enterClass: 'rotateInDownLeft',
    leaveClass: 'rotateOutDownRight'
})

new Vue({
    el: 'body',
    data: {
        mensaje: 'transicion',
        visible: true
    }
})