<img src="./assets/logo.png" alt="Finnotate logo" width="118" height="120">

> [!WARNING] 
> This project is currently under development and is very unstable. Please
> use this project for experimental purposes and not for production use.

# Finance Annotator (finnotate)

<ins>Finnotate</ins> is a self-hosted tool to annotate your financial transactions. Transactions can be annotated by creating custom rules to identify, categorize and label them.

## Project structure

The project is organized as a [Monorepo](https://en.wikipedia.org/wiki/Monorepo) where different components of the application such as front-end, back-end and utilities are kept in a single repository.

The project is comprised of following components

- Ingestor
- Annotator
- Front-end
- Back-end
- Utilities

## Quickstart

Since this is a self-hosted project you need to build and run the application on your own server. You need to install [Docker](https://www.docker.com/) to containerize the project.

In the project root directory run the following command to build the project

```
docker-compose up --build
```
## Contribution

## License
MIT License


