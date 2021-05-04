require('colors');

const { guardarInfo, leerInfo } = require('./helpers/guardarAchivo');
const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async () => {

    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();

    const tareasInfo = leerInfo();

    if (tareasInfo) {

        tareas.cargarTareasArray(tareasInfo)

    }



    do {

        opt = await inquirerMenu();


        switch (opt) {
            case '1':

                const desc = await leerInput('descripción: ');
                tareas.crearTarea(desc);

                break;

            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':
                 const ids = await mostrarListadoChecklist(tareas.listadoArr);
                 tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id !== '0') {
                    const ok = await confirmar('Estas Seguro')
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada correctamente')
                    }
                }
                break;
        }

        guardarInfo(tareas.listadoArr);





        await pausa();

    } while (opt !== '0');


    //pausa()
}


main();