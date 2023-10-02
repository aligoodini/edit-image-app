const $ = document;

const fileInput = $.querySelector("#file");
const brightnessInput = $.querySelector("#brightness");
const SaturationInput = $.querySelector("#Saturation");
const blurInput = $.querySelector("#blur");
const InversionInput = $.querySelector("#Inversion");
const toolbar = $.querySelector(".toolbar")
const canvas = $.querySelector("canvas");
let ctx = canvas.getContext("2d");

let setting = [100,100,0,0]

let img = new Image();

fileInput.addEventListener("change",()=>{

    img.src = URL.createObjectURL(fileInput.files[0]);
    
    img.onload = ()=>{
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,700,450)
    }

})

brightnessInput.addEventListener("input",()=>{
    setting[0] = brightnessInput.value;
})

SaturationInput.addEventListener("input",()=>{
    setting[1] = SaturationInput.value;
})

blurInput.addEventListener("input",()=>{
    setting[2] = blurInput.value;
})

InversionInput.addEventListener("input",()=>{
    setting[3] = InversionInput.value;
})

toolbar.addEventListener("change",()=>{
    ctx.filter = `brightness(${setting[0]}%) saturate(${setting[1]}%) blur(${setting[2]}px) invert(${setting[3]}%)`
    ctx.drawImage(img,0,0,700,450)
})