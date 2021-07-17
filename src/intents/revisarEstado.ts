import { revisarEstadoController } from "../controllers/revisarEstadoController";

export async function intentRevisarEstado(agent: any) {
    const controller = new revisarEstadoController();
    if (agent.parameters && agent.parameters["assignmentId"]) {
        const accionesEstudianteContext = {
            name: 'accionesestudiante-followup',
            lifespan: 5
        }
        const assignment = await controller.getAssignmentById(agent.parameters["assignmentId"]).catch(err => console.log(err));
        const subject = await controller.getSubjectById(assignment.subject).catch(err => console.log(err));
        if (assignment) {
            if (assignment.grade) {
                let itemsText = "";
                let items = []
                for (let i of assignment.items) {
                    items.push(await controller.getItemById(i).catch(err => console.log(err)));
                }
                items.forEach((item: any, index: number) => {
                    itemsText += `\nItem ${index + 1}: ${item.title}, con nota: ${item.grade} y un porcentaje de ${item.percentage * 100}%`;
                });
                agent.add(`
Tu tarea se encuentra revisada ✅.

Materia: ${subject.name}, título del trabajo: ${assignment.title}.

El enlace fue el siguiente: ${assignment.url}

La nota final fue ${assignment.grade} y el detalle de la nota es el siguiente:
${itemsText}
                `);
            } else {
                agent.add(`
Tu tarea aun no se encuentra revisada 😶.

Materia: ${subject.name}, título del trabajo: ${assignment.title}.

El enlace fue el siguiente: ${assignment.url}
                `);
            }
        } else {
            agent.add(`
❌ Revisa el identificador del trabajo que ingresaste. Te regresaré al menú de selección de acciones.
            `);
        }
        agent.add(`
    Las cosas que puedo hacer por ti son:
    
    🔹Entregar tu trabajo a través de un enlace.
    🔹Revisar el estado de un trabajo por su identificación.
    
    Si has terminado aquí puedes decir "Adiós" 🐤.
        `);
        agent.context.set(accionesEstudianteContext);
    }
}