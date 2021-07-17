import { Router } from 'express';
import { WebhookClient } from 'dialogflow-fulfillment';
import { intentSubirTrabajo } from '../intents/subirTrabajo';
import { intentAccionesProfesor } from '../intents/accionesProfesor';
import { intentCalificarTrabajo } from '../intents/calificarTrabajo';
import { intentCalificarItems } from '../intents/calificarItems';
import { intentRevisarEstado } from '../intents/revisarEstado';
import { intentEoP } from '../intents/eoP';
import { intentAccionesEstudiante } from '../intents/accionesEstudiante';


const router = Router();

router.get('/', (req, res) => {
    res.send("It works!");
});

router.post('/', (req, res) => {
    const agent = new WebhookClient({
        request: req,
        response: res
    });

    const intentMap = new Map();

    intentMap.set('EoP', intentEoP);
    intentMap.set('AccionesEstudiante', intentAccionesEstudiante);
    intentMap.set('SubirTrabajo', intentSubirTrabajo);
    intentMap.set('AccionesProfesor', intentAccionesProfesor);
    intentMap.set('CalificarTrabajo', intentCalificarTrabajo);
    intentMap.set('CalificarItems', intentCalificarItems);
    intentMap.set('RevisarEstado', intentRevisarEstado);

    agent.handleRequest(intentMap);
});

export default router;
