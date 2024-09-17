# Fishjam Cloud Documentation

You can access generated documentation here: https://fishjam-cloud.github.io/documentation/

### What is inside?

The Documentation explains how Fishjam Cloud works and how it can be integrated in your mobile or web application

### Local Development

Get all dependencies

```
yarn
```

and run development preview

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

#### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

#### Deployment

Documentation is deployed automatically with each PR. See [Deploy Docosaurus](.github/workflows/docs.yaml) action

### Docosaurus

Documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator..
