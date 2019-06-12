FROM node:10

# RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Bundle app source
RUN yarn build-production
COPY . .

ENV PORT_HTTP=${PORT}

CMD yarn start