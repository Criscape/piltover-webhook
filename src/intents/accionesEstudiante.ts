export async function intentAccionesEstudiante(agent: any) {
    const eoPContext = agent.contexts.filter((context: { name: string; }) => context.name == 'eop-followup');
    agent.add(`
Entendido ${eoPContext[0].parameters.person.name}, las cosas que puedo hacer por ti son:

🔹Entregar tu trabajo a través de un enlace.
🔹Revisar el estado de un trabajo por su identificación.

Si has terminado aquí puedes decir "Adiós" 🐤.
    `);
}