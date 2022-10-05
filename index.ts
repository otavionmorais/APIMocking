import configuration from './endpoints';
import express, { Request, Response, Express } from 'express';
import { IEndpoint, IEndpointMethod, IEndpointPath } from './structures';
const app = express();
const port = configuration.port;

const endpoints = Object.keys(configuration.endpoints);

for (const endpointName of endpoints) {
  const endpoint = configuration.endpoints[
    endpointName as IEndpointPath
  ] as IEndpoint;
  const methods = Object.keys(endpoint);

  for (const method of methods) {
    const methodConfig = endpoint[method as keyof IEndpoint] as IEndpointMethod;

    app[method as keyof Express](
      endpointName,
      (_req: Request, res: Response) => {
        res.set(methodConfig.headers).send(methodConfig.body);
      }
    );
    console.log(`Endpoint ${endpointName} registered with method ${method}`);
  }
}

app.listen(port, () => {
  console.log(`APIMocking listening on port ${port}`);
});
