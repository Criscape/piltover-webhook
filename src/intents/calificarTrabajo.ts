import { calificarTrabajoController } from "../controllers/calificarTrabajoController";

export async function intentCalificarTrabajo(agent: any) {
    if (agent.parameters && agent.parameters["assignmentId"]) {
        const controller = new calificarTrabajoController();
        const assignment = await controller.getAssignmentById(agent.parameters["assignmentId"]).catch(err => console.log(err));
        if (assignment) {
            agent.add(`
Este trabajo (${assignment.assignmentId}) 📄, tiene el siguiente enlace: ${assignment.url}

Para darle una nota final ingresa por favor el número con punto para el separador decimal, en caso de que quieras dar una nota detallada, ingresa la calificación con este formato:

"nombre_item":"nota";"porcentaje","nombre_item2":"nota";"porcentaje" ...

El sistema se encargará de calcular la nota final.
            `);
        } else {
            const accionesProfesorContext = {
                name: 'accionesprofesor-followup',
                lifespan: 5
            }
            agent.add(`
❌ Revisa el identificador del trabajo que ingresaste. Te regresaré al menú de selección de acciones.
            `);
            agent.add(`
Las cosas que puedo hacer por ti son:

🔹Calificar un trabajo por su identificación.
🔹Mostrar trabajos por materia.

Si has terminado aquí puedes decir "Adiós" 🐤.
            `);
            agent.context.set(accionesProfesorContext);
        }
    }
}