FROM node:18
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/ .bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
COPY  ./src/admin/admin/src/. ./node_modules/@strapi/admin/admin/src
COPY  ./src/admin/extensions/plugin-content-type-builder/translations/. ./node_modules/@strapi/plugin-content-type-builder/admin/src/translations
COPY  ./src/admin/extensions/plugin-documentation/translations/. ./node_modules/@strapi/plugin-documentation/admin/src/translations
COPY  ./src/admin/extensions/plugin-email/translations/. ./node_modules/@strapi/plugin-email/admin/src/translations
COPY  ./src/admin/extensions/plugin-i18n/translations/. ./node_modules/@strapi/plugin-i18n/admin/src/translations
COPY  ./src/admin/extensions/plugin-upload/translations/. ./node_modules/@strapi/plugin-upload/admin/src/translations
COPY  ./src/admin/extensions/plugin-users-permissions/translations/. ./node_modules/@strapi/plugin-users-permissions/admin/src/translations
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
