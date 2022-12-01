# Welcome to Caesar, the Coorinape Discord Bot  

With Web3 communities proliferating and thriving on Discord, Coordinape is
bringing Circle assignment and Epoch alert functionality to Discord! CO Kong
is developed for the purpose of automating Circle assignment, so you can 
spend less time signing up members and more time producing and building.  

## Caesar Development  

## GraphQL

### Schema

2e51bbdf

### Zeus

`yarn zeus http://localhost:8080/v1/graphql ./src/app/api -n --ts -h=x-hasura-admin-secret:admin-secret -s graphql-ws`

or without subscriptions

`yarn zeus http://localhost:8080/v1/graphql ./src/app/api -n --ts -h=x-hasura-admin-secret:admin-secret`

### LogDNA

LogDNA (now [mezmo.com](https://www.mezmo.com/)) was the service for logging that was implemented originally in the app.

### Sentry

[Sentry](https://sentry.io/) for application monitoring and error tracking
