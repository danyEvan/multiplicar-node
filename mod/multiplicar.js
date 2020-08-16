const colors = require('colors');
const fs = require('fs');

const listarTabla = (base, limite) => {
    let data = '';
        for(let i = 1; i <= limite; i++ ){
            data += `${ base } x ${ i } = ${ base * i }\n`;
        }
        console.log(data)
}

const crearArchivo = (base, limite) =>{
    return new Promise((resolve, reject) => {
                if(!Number(base)){
                    reject(`El valor ${base} no es un numero`.red)
                    return;
                }
                let data = '';
                for(let i = 1; i <= limite; i++ ){
                data += `${ base } x ${ i } = ${ base * i }\n`;
            }
    
                fs.writeFile(`archivos/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
            
                    if (err) reject(err)
                    else resolve(`tabla-${base}-hasta-el-${limite}.txt`.green)
        })

    })
}


module.exports = {
    crearArchivo,
    listarTabla
}
