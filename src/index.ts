import express, { Request, Response} from 'express';

const server = express();

const PORT = process.env.PORT || 5000;

server.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Wellcome'})
})

server.listen(PORT, () => console.log('Server on'))
