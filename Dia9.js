// function adjustLights(lights) {
//     let caminoRojo = 0;
//     let caminoVerde = 0;
//     lights.forEach(function(light, index) {
//         let isPair = (index % 2) == 0;
//         if (isPair && light != '🔴') caminoRojo++;
//         if (!isPair && light != '🟢') caminoRojo++;
//         if (isPair && light != '🟢') caminoVerde++;
//         if (!isPair && light != '🔴') caminoVerde++;
//     });
//     return Math.min(caminoRojo, caminoVerde);
// }

function adjustLights(lights) {
    let caminoRojo = 0;
    let caminoVerde = 0;
    lights.forEach(function(light, index) {
        let isPair = (index % 2) == 0;
        if (isPair && light != '🔴') {
            caminoRojo++;
        } else if (isPair && light != '🟢') {
            caminoVerde++;
        }
        if (!isPair && light != '🟢') {
            caminoRojo++;
        } else if (!isPair && light != '🔴') {
            caminoVerde++;
        }
    });
    return Math.min(caminoRojo, caminoVerde);
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));