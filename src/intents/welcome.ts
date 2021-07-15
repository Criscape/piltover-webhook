export function intentWelcome(agent: any): void {
    if (agent.parameters && agent.parameters["given-name"]) {
        agent.add(`
¡Hola ${agent.parameters["given-name"]}! Bienvenido al servicio de gestión de trabajos de la Universidad Piltover, yo soy Pilt 🐣, tu asistente automático, cuéntame, ¿que necesitas?.

Las cosas que puedo hacer por ti son:

🔹Adjuntar enlace de acceso del trabajo a la plataforma de la universidad.
🔹Evaluar el estado y detalle de un trabajo en particular.
🔹Listar tus trabajos por materia.
        `);    
    } else {
        agent.add(`
¡Hola! Bienvenido al servicio de gestión de trabajos de la Universidad Piltover, yo soy Pilt 🐣, tu asistente automático, cuéntame, ¿que necesitas?.

Las cosas que puedo hacer por ti son:

🔹Adjuntar enlace de acceso del trabajo a la plataforma de la universidad.
🔹Evaluar el estado y detalle de un trabajo en particular.
🔹Listar tus trabajos por materia.
        `);
    }
}