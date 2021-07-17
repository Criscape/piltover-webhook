import { eoPController } from "../controllers/eoPController";

export async function intentEoP(agent: any) {
    const controller = new eoPController();
    if (agent.parameters && agent.parameters["id"]) {
        const student = await controller.getStudentById(agent.parameters["id"]).catch(err => console.log(err));
        const teacher = await controller.getTeacherById(agent.parameters["id"]).catch(err => console.log(err));
        if (student || teacher) {
            agent.add(`
🐥 Perfecto, tu identificación está en nuestras bases de datos, cuéntame, ¿eres estudiante?
            `);
        } else {
            const identificationContext = {
                name: 'identification-followup',
                lifespan: 5
            }
            agent.add(`
🤔 No he podido encontrar tu identificación, verifica el número y vuélvelo a ingresar por favor.
            `);
            agent.context.set(identificationContext);
        }
    }
}