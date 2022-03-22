import * as express from 'express';
import { Request, Response } from 'express';
import * as initialState from './initialState.json';

const app = express();
const port = process.env.PORT || 3005;

app.get( '/', ( req: Request, res: Response ) => {
    res.send('Hello typescript!');
});

app.get( '/api/v1', ( req: Request, res: Response ) => {
    res.json( initialState );
});

app.listen( port, () => {
    console.log( `App listening on port: ${ port }` );
});