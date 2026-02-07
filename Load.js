class Load extends Phaser.Scene{
    create()
    {
        this.hero = new this.hero(this, 200, 150, 'hero', 0, 'down')
        


        this.keys = this.input.keyboard.createCursorKeys()
        this.keys.Hkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H)
    }
}