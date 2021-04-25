
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="'+ this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

}

var hero = new Hero('pikachu.png', 20, 30, 200);
console.log(hero.getHeroElement())
function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }

    //setTimeout(start, 500)
}
document.getElementById('game').innerHTML = 'fdfdf'
//start();