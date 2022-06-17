export default class Menu extends Phaser.Scene 
{
    constructor(){
        super({ key: 'menu' });
        this.start = false;
    }

    create()
    {
        let {
            width,
            height
          } = this.sys.game.canvas;
      
        this.easymode = this.add.text(width / 3, height / 4, 'Easy', {
            fontFamily: 'Future ',
            fontSize: 60,
            align: 'center',
            color: '#fff'

        });
        this.easymode.setInteractive();
        this.easymode.on('pointerup', () => { 
            this.scene.start('level', 3);
         });
        this.mediummode = this.add.text(width / 3, height / 2.5, 'Medium', {
            fontFamily: 'Future ',
            fontSize: 60,
            align: 'center',
            color: '#fff'

        });
        this.mediummode.setInteractive();
        this.mediummode.on('pointerup', () => { 
            this.scene.start('level', 1);
         });
        this.hardmode = this.add.text(width / 3, height / 1.8, 'Hard', {
            fontFamily: 'Future ',
            fontSize: 60,
            align: 'center',
            color: '#fff'

        });
        this.hardmode.setInteractive();
        this.hardmode.on('pointerup', () => { 
            this.scene.start('level', 2);
         });
	}

    preUpdate(t,dt) {

    }
}