class Resources {
    constructor(){
        //Everything we plan to download
        this.to_load = {
            sky: "/sprites/sky.png",
            ground: "/sprites/ground.png",
            hero: "/sprites/hero-sheet.png"
        };


    this.images = {};

    Object.keys(this.to_load).forEach(key =>{
        const img = new Image()
        img.src = this.to_load[key];
        this.images[key] = {
            image: img,
            is_loaded: false
        }
        img.onload = () => {
            this.images[key].is_loaded = true;
        }
        })
    }
}

export const resources = new Resources();