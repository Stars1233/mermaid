FROM node:20.18.0-alpine3.19 AS base
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
