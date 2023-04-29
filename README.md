# Coordinape Discord Bot

Bringing Coordinape to Discord.

## Setting up a Discord Dev bot

TODO: fill this out

## Bot Development

- Reqs: Have yarn 1.22.19 installed
- Install packages with `yarn`

Start server and backend processs

```
yarn && yarn dev
yarn && yarn serve:dev
```

## GraphQL

### Schema

We're currenctly manually updating Zeus by pulling in commits from the
coordinape repo as hacky submodules. Kpie is making custom modifications
to the codegen so that GraphQL subscriptions work.

In the generated file `src/app/api/zeus/index.ts`, add the following class

```typescript
class HasuraWebSocket extends WebSocket {
  constructor(address: string, protocols: string) {
    super(address, protocols, {
      headers: {
        authorization:
          process.env.DISCORD_BOT_AUTHORIZATION_HEADER || "no_secret",
        "x-hasura-role": "discord-bot",
      },
    });
  }
}
```

and then use it as follows inside the `apiSubscription` function

```typescript
const client = createClient({
  url: String(options[0]),
  webSocketImpl: HasuraWebSocket,
});
```

833507b123dbd7102efb408766abe240d2a4df2b (branch `karelianpie:feat/trigger-discord-epoch-events`)

### Zeus

`yarn zeus http://localhost:8080/v1/graphql ./src/app/api -n --ts -h=x-hasura-admin-secret:admin-secret -s graphql-ws`

or without subscriptions

`yarn zeus http://localhost:8080/v1/graphql ./src/app/api -n --ts -h=x-hasura-admin-secret:admin-secret`

### Sentry

[Sentry](https://sentry.io/) for application monitoring and error tracking
