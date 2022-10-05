import { IEndpointsConfiguration } from './structures';

const config: IEndpointsConfiguration = {
  port: 3000,
  endpoints: {
    '/example': {
      get: {
        status: 200,
        body: {
          example:
            'This is an example body field that will be retuned when accessing /example.',
        },
        headers: {
          'example-header':
            'This is an example header field that will be retuned when accessing /example.',
        },
      },
    },
  },
};

export default config;
