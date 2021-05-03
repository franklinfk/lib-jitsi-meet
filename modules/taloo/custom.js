import { getLogger } from 'jitsi-meet-logger';
import https from 'https';

const logger = getLogger(__filename);

class TalooBackendConnector {
    constructor() {
        
    }

    static sendMucJoinedRequest() {
        logger.info(`Sending JOINED request to taloo backend] `)

        const data = JSON.stringify({
            userId: 'userId_123'
        })
          
        const options = {
            hostname: 'taloo.io',
            port: 443,
            path: '/registerMucUserJoined',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            }
        } 

        const req = https.request(options, res => {
            logger.info(`TalooResponse --- StatusCode[${res.statusCode}] `)
        })

        req.write(data);
        req.end();

    }

    static sendMucLeftRequest() {
        logger.info(`Sending LEFT request to taloo backend] `)

        const data = JSON.stringify({
            userId: 'userId_123'
        })
          
        const options = {
            hostname: 'taloo.io',
            port: 443,
            path: '/registerMucUserLeft',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            }
        } 

        const req = https.request(options, res => {
            logger.info(`TalooResponse --- StatusCode[${res.statusCode}] `)
        })

        req.write(data);
        req.end();

    }

}

export default TalooBackendConnector;