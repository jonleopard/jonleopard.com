FROM node:12.18.1-alpine3.9

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app

# Build app
RUN npm run build
EXPOSE 3000

# Run
CMD "npm" "start"
