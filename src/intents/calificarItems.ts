import { calificarItemsController } from "../controllers/calificarItemsController";

export async function intentCalificarItems(agent: any) {
    const controller = new calificarItemsController();
    if (agent.parameters && agent.parameters["grade"]) {
        const accionesProfesorContext = {
            name: 'accionesprofesor-followup',
            lifespan: 5
        }
        const calificarTrabajoContext = agent.contexts.filter((context: { name: string; }) => context.name == 'calificartrabajo-followup');
        const items = await controller.validateItems(agent.parameters["grade"], calificarTrabajoContext[0].parameters.assignmentId).catch(err => console.log(err));
        if (items) {
            let itemsCreated = []
            for (let item of items) {
                itemsCreated.push(await controller.createItem(item).catch(err => console.log(err)));
            }
            const assignmentGrade = controller.calcGradeFromItems(items);
            const itemsId = itemsCreated.map(item => item.id);
            await controller.updateAssignmentGradeAndItems(calificarTrabajoContext[0].parameters.assignmentId, assignmentGrade, itemsId).catch(err => console.log(err));
            agent.add(`
✅ Se ha calificado con éxito la tarea. Te regresaré al menú de selección de acciones.
            `);
        } else {
            agent.add(`
❌ El formato que ingresaste no es el adecuado, por favor intenta de nuevo, te devolveré al menú.
            `);
        }
        agent.add(`
Las cosas que puedo hacer por ti son:

🔹Calificar un trabajo por su identificación.
🔹Mostrar trabajos por materia.

Si has terminado aquí puedes decir "Adiós" 🐤.
        `);
        agent.context.set(accionesProfesorContext);
    }
}