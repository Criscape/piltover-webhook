export async function intentAccionesEstudiante(agent: any) {
    agent.add(`
Entendido, las cosas que puedo hacer por ti son:

🔹Entregar tu trabajo a través de un enlace.
🔹Revisar el estado de un trabajo por su identificación.
🔹Listar tus trabajos por materia.

Si has terminado aquí puedes decir "Adiós" 🐤.
    `);
}