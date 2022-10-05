# APIMocking

Simple script to mock endpoints for integration between systems

## Usage

To use this script, you you need to install nodejs and npm. Then, you need to install the dependencies with `npm install`. After that, you can run the script with `npm run start`.

## Configuration

The configuration is done in the `endpoints.ts` file. The file has the following structure:

```json
{
  "port": 3000,
  "endpoints": [
    {
      "path": "/endpoint1",
      "method": "GET",
      "response": {
        "status": 200,
        "body": {
          "message": "Hello World"
        }
      }
    },
    {
      "path": "/endpoint2",
      "method": "POST",
      "response": {
        "status": 200,
        "body": {
          "message": "Hello World"
        }
      }
    }
  ]
}
```
