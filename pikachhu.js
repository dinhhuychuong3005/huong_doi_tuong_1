function Pikachu(image,top,left,size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.pikachuElement = function (){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    this.moveRight = function (){
        this.left += 20;
    }
}
let pikachu = new Pikachu(,20,30,200);
function start(){
    if (pikachu.left < window.innerWidth - pikachu.size){
        pikachu.moveRight();
    }
    document.getElementById('game').innerHTML = pikachu.pikachuElement();
    setInterval(start,500)
}