FROM node:24-alpine as builder
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
# RUN curl -fsSL https://get.pnpm.io/install.sh | sh -
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install
COPY . .
RUN pnpm build
# RUN pnpm start
CMD ["pnpm","start"]
