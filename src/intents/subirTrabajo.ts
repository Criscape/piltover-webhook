import { subirTrabajoController } from "src/controllers/subirTrabajoController";

export async function intentSubirTrabajo(agent: any) {
    const accionesEstudianteContext = {
        name: 'accionesestudiante-followup',
        lifespan: 5
    }
    if (agent.parameters && agent.parameters["subjectId"] && agent.parameters["url"] && agent.parameters["title"]) {
        const controller = new subirTrabajoController();
        const subject = await controller.getSubjectById(agent.parameters["subjectId"]).catch(err => console.log(err));
        if (subject) {
            const identificationContext = agent.contexts.filter((context: { name: string; }) => context.name == 'identification-followup');
            const studentMongoId = await controller.getStudentById(identificationContext[0].parameters.id).catch(err => console.log(err));
            const assignment = await controller.createAssignment(studentMongoId, subject.id, agent.parameters["title"], agent.parameters["url"])
            .catch(err => console.log(err));
            if (assignment != null) {
                agent.add(`
✅ Se ha creado con éxito la tarea, revísala en un tiempo, cuando ya esté calificada. Te regresaré al menú de selección de acciones.
                `);
            }
        } else {
            agent.add(`
❌ Revisa el identificador de la materia que ingresaste. Te regresaré al menú de selección de acciones.
            `);
        }
        agent.add(`
Las cosas que puedo hacer por ti son:

🔹Entregar tu trabajo a través de un enlace.
🔹Revisar el estado de un trabajo por su identificación.
🔹Listar tus trabajos por materia.

Si has terminado aquí puedes decir "Adiós" 🐤.
        `);
        agent.context.set(accionesEstudianteContext);
    }
}