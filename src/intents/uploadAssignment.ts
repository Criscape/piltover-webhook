import { UploadAssignmentController } from "src/controllers/uploadAssigmentController";

export async function intentUploadAssignment(agent: any) {
    const controller = new UploadAssignmentController();
    if (agent.parameters && agent.parameters["id"]) {
        const student = await controller.getStudentById(agent.parameters["id"]);
        if (student) {
            const subjects = await controller.getSubjectsByStudentId(student.id);
            let subjectsText = "";
            if (subjects) {
                subjects.forEach((value: any, index: number) => {
                    subjectsText += `\n${index + 1} ${value.title}`;
                });
            }
            agent.add(`
Tus materias son las siguientes:
${subjectsText}

Selecciona un número de acuerdo a la materia que quieras seleccionar para subir tu trabajo.
            `);    
        }
        agent.add(`
Desafortunadamente no hemos encontrado un registro asociado a la identificación ingresada, por favor ingrese correctamente su identificación o contacte un administrador.
        `);
    }
}

export function intentUASelectSubject(agent: any): void {
    if (agent.parameters && agent.parameters["id"]) {
        // buscar profesores
        // si hay 1 o más de uno generar otro intent
        // si no hay error
    }
}