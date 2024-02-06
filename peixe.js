var config = {
    tyoe: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    //carregando o mar
    this.load.image('mar', 'assets/bg_azul-claro.png');

    //carregando a logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregando o peixe
    this.load.image('peixe', 'assets/peixes/baiacu.png');

    //carregando o bomba
    this.load.image('bomba', 'assets/peixes/bomba.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    //adicionado o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adicionando o bomba no jogo
    this.add.image(400, 300, 'bomba');

    //guardar o peixe em uma variável 
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}