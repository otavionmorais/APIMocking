# APIMocking

Simple script to mock endpoints for integration between systems.You can mock responses of HTTP requests, simulating the response of other service.

## Usage

To use this script, you you need to install nodejs. Clone this repository, install the dependencies with the command `npm i`. After that, you can run the script with the command `npm run start`.

## Configuration

The configuration is done in the `endpoints.ts` file. The file has the following structure:

```json
{
  "port": 3000,
  "endpoints": {
    "/example": {
      "get": {
        "status": 200,
        "body": {
          "example": "This is an example body field that will be retuned when accessing /example."
        },
        "headers": {
          "example-header": "This is an example header field that will be retuned when accessing /example."
        }
      }
    }
  }
}
```

The `port` field is the port that the server will listen to. The `endpoints` field is an object that contains the endpoints that will be mocked.

The key of the object is the endpoint path (must start with '/'), and the value is an object that contains the methods that will be mocked.

For example, when accessing `http://localhost:3000/example` with the `GET` method, the server will return the following response body:

```json
{
  "example": "This is an example body field that will be returned when accessing /example."
}
```

And the following headers:

```json
{
  "example-header": "This is an example header field that will be returned when accessing /example."
}
```

More functionalities will be added in the future, like variables to access request fields in the response.
