export async function intentAccionesProfesor(agent: any) {
    agent.add(`
Entendido, las cosas que puedo hacer por ti son:

🔹Calificar un trabajo por su identificación.
🔹Mostrar trabajos por materia.

Si has terminado aquí puedes decir "Adiós" 🐤.
    `);
}