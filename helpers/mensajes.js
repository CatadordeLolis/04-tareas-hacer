const { Resolver } = require('dns');
const { resolve } = require('path');

require('colors')

const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('========================'.green)
        console.log(' Seleccione una Opción '.red)
        console.log('========================\n'.green)

        console.log(`${'1'.blue}. Crear Tareas`)
        console.log(`${'2'.blue}. Listar Tareas`)
        console.log(`${'3'.blue}. Listar Tareas Completadas`)
        console.log(`${'3'.blue}. Listar Tareas Pendientes`)
        console.log(`${'5'.blue}. Completar Tarea(s)`)
        console.log(`${'6'.blue}. Borrar Tarea`)
        console.log(`${'7'.blue}. Salir\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);

        })

    });



}

const pausa = () => {

    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.bgMagenta}\n`, (opt) => {
            readline.close();
            resolve();

        })


    });


}

module.exports = {
    mostrarMenu,
    pausa

}