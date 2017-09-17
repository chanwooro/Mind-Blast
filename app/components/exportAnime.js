require('../../node_modules/animejs/anime.min.js');

export function startAction(){
    anime({
        targets: '.primary-aside',
        translateX: 250
    });
}
     