export interface IEndpointMethod {
  body?: Record<string, any>;
  headers?: Record<string, any>;
  status: number;
}

export interface IEndpoint {
  get?: IEndpointMethod;
  post?: IEndpointMethod;
  put?: IEndpointMethod;
  delete?: IEndpointMethod;
  patch?: IEndpointMethod;
}

export type IEndpointPath = `/${string}`;

export type IEndpointList = Record<IEndpointPath, IEndpoint>;

export interface IEndpointsConfiguration {
  port: number;
  endpoints: IEndpointList;
}
