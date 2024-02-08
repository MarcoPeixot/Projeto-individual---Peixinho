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

var peixinhos;

function preload() {
    //carregando o mar
    this.load.image('mar', 'assets/bg_azul-claro.png');

    //carregando a logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregando o peixe
    this.load.image('peixe1', 'assets/peixes/baiacu.png');

    //carregando o peixe
    this.load.image('peixe2', 'assets/peixes/baiacu_lado.png');

    //carregando o peixe
    this.load.image('peixe3', 'assets/peixes/peixe_amarelo.png');

    //carregando o peixe
    this.load.image('peixe4', 'assets/peixes/peixe_listra.png');

    //carregando o peixe
    this.load.image('peixe5', 'assets/peixes/peixe_logo.png');

    //carregando o peixe
    this.load.image('peixe6', 'assets/peixes/peixe_serio.png');

    //carregando o peixe
    this.load.image('peixe7', 'assets/peixes/peixinho_laranja.png');

    //carregando o bomba
    this.load.image('bomba', 'assets/peixes/bomba.png');

}

function create() {
    this.add.image(400, 300, 'mar');

    //adicionado o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adicionando o bomba no jogo
    this.add.image(400, 300, 'bomba');
    
    this.add.image(400, 400, 'peixe2');
    this.add.image(100, 300, 'peixe3');
    this.add.image(800, 900, 'peixe4');
    this.add.image(700, 150, 'peixe5');
    this.add.image(280, 200, 'peixe6');
    this.add.image(900, 790, 'peixe7');

    //guardar o peixe em uma variável 
    peixinhos = this.add.image(100, 300, 'peixe1');
    peixinhos.setFlip(true, false);
}

function update() {
    peixinhos.x = this.input.x;
    peixinhos.y = this.input.y;
}