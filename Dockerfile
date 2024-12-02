FROM node:21.7.1-alpine as base
RUN corepack enable
WORKDIR /opt/docusaurus

FROM base as prod
WORKDIR /opt/docusaurus
COPY . /opt/docusaurus/
WORKDIR /opt/docusaurus/SoftHub.DocsStolen
RUN npm install
# RUN npm audit fix

FROM prod as serve
EXPOSE 5003
CMD ["npm", "run", "start", "--max-old-space-size=4096"]

FROM caddy:2-alpine as caddy
COPY --from=prod /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
COPY --from=prod /opt/docusaurus/build /var/docusaurus