export async function intentAccionesProfesor(agent: any) {
    const eoPContext = agent.contexts.filter((context: { name: string; }) => context.name == 'eop-followup');
    agent.add(`
Entendido, las cosas que puedo hacer por ti son:

🔹Calificar un trabajo por su identificación.

Si has terminado aquí puedes decir "Adiós" 🐤.
    `);
}