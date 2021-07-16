import { Router } from 'express';
import { WebhookClient } from 'dialogflow-fulfillment';
import { intentEoP } from './../../src/intents/eoP';
import { intentAccionesEstudiante } from 'src/intents/accionesEstudiante';
import { intentSubirTrabajo } from 'src/intents/subirTrabajo';
import { intentAccionesProfesor } from 'src/intents/accionesProfesor';
import { intentCalificarTrabajo } from 'src/intents/calificarTrabajo';
import { intentCalificarItems } from 'src/intents/calificarItems';
import { intentRevisarEstado } from 'src/intents/revisarEstado';


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
