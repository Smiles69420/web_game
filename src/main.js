import './style.css'
import { resources } from './Resources';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const sky = resources.images.sky;
const ground = resources.images.ground;

const draw = (img) => {

    if (img.is_loaded){
        ctx.drawImage(img.image,0,0);
    }

    
}

setInterval(() => {
    console.log("draw")
    draw(sky)
    draw(ground)
}, 300)