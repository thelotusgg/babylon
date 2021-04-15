FROM node:14.16.1-alpine As development

WORKDIR /usr/src/app

# Step 1: copy package.json and install dependencies with ci (without dependency resolution)
COPY package*.json ./
RUN npm ci

# Step 2: Copy code and build
COPY . .
RUN npm run build

FROM node:14.16.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN npm install -g http-server

# Copy everything from development and prune dev dependencies
COPY --from=development /usr/src/app .
RUN npm prune --production

CMD [ "http-server", "dist" ]
