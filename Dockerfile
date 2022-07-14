FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
# COPY package.json yarn.lock* ./
RUN yarn install


# Exports
EXPOSE 3000
CMD [ "yarn", "dev" ]
