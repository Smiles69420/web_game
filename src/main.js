import './style.css'
import { resources } from './Resources';
import { Sprite } from './Sprite';
import { Vector2 } from './Vector2';
import { GameLoop } from './GameLoop';
import { DOWN, Input, LEFT, RIGHT, UP } from './Input';
import { gridCells } from './helpers/grid';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320,180),
})
const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320,180),
})



const hero = new Sprite({
    resource: resources.images.hero,
    frameSize: new Vector2(32,32),
    hFrames: 3,
    vFrames: 8,
    Frame: 0,
    position: new Vector2(gridCells(6),gridCells(5))
})

const input = new Input()

const update = () => {
    if(input.direction === DOWN){
        hero.position.y += 1;
        hero.Frame = 0;
    }
    if(input.direction === UP){
        hero.position.y -= 1;
        hero.Frame = 6;
    }
    if(input.direction === LEFT){
        hero.position.x -= 1;
        hero.Frame = 9;
    }
    if(input.direction === RIGHT){
        hero.position.x += 1;
        hero.Frame = 3;
    }
}


const heroPos = new Vector2(16*6,16*5);


const draw = () => {
    skySprite.drawImage(ctx,0,0);
    groundSprite.drawImage(ctx,0,0);

    const heroOffset = new Vector2(-8, -21);
    const heroPosX = hero.position.x+heroOffset.x;
    const heroPosY = hero.position.y+heroOffset.y;

    hero.drawImage(ctx, heroPosX,heroPosY);
}

const gameLoop = new GameLoop(update,draw);
gameLoop.start();