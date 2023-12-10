function adjustLights(lights) {
    let caminoRojo = 0;
    let caminoVerde = 0;
    lights.forEach(function(light, index) {
        let isPair = (index % 2) == 0;
        if (isPair && light != '🔴') caminoRojo++;
        if (!isPair && light != '🟢') caminoRojo++;
        if (isPair && light != '🟢') caminoVerde++;
        if (!isPair && light != '🔴') caminoVerde++;
    });
    return Math.min(caminoRojo, caminoVerde);
}


adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    // -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
    // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
    // -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
    // -> 1 (cambias la segunda luz a 🟢)