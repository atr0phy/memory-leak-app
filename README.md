## Local run

1. `cd src`
1. `npm install`
1. `node server.js`

## Docker run

1. `docker build . -t mleak`
1. `docker run -d -p 3000:3000 mleak`

## Request

### consume memory

`curl http://localhost:3000/?size=[bytes]`

### show memory

`curl http://localhost:3000/`
