import { Router } from 'express';
import { WebhookClient } from 'dialogflow-fulfillment';
import { intentWelcome } from 'src/intents/welcome';
import { intentUploadAssignment } from 'src/intents/uploadAssignment';


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

    intentMap.set('UploadAssignment', intentUploadAssignment);
    intentMap.set('Welcome', intentWelcome);

    agent.handleRequest(intentMap);
});

export default router;
