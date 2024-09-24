FROM node:alpine AS build-env
RUN apk update
ADD src /opt/src
RUN cd /opt/src && \
    npm install

FROM node:alpine
COPY --from=build-env /opt/src /opt/src
EXPOSE 3000

ENTRYPOINT ["node", "/opt/src/server.js"]
