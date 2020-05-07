var text = document.getElementById('text');
var shadow = '';

for(var i = 0; i<35; i++){
    shadow += (shadow? ',':'')+ -i*1 + 'px ' + i*1 + 'px 0 #d9d9d9';
}

text.style.textShadow = shadow;