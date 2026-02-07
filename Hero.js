class Hero extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame, direction)
        {

        }
    }

    class CircularState extends State
    {
        enter(scene, hero)
        {
            hero.setVelocity(0)
            hero.anims.play('circular-attack').once('animationcomplete')
        }
    }
}