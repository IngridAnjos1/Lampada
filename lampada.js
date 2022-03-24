const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}



const lampOn = () => {
    if (!isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }

}

const lampOff = () => {
    if (!isLampBroken ()) {
    lamp.src = './img/desligada.jpg';
    }
}

const lapmBroken = () =>{
    lamp.src = './img/quebrada.jpg';
}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click',lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lapmBroken);

// teste//