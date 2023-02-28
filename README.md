# Welcome to Caesar, the Coorinape Discord Bot

With Web3 communities proliferating and thriving on Discord, Coordinape is
bringing Circle assignment and Epoch alert functionality to Discord! CO Kong
is developed for the purpose of automating Circle assignment, so you can
spend less time signing up members and more time producing and building.

## Caesar Development

```
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
				'authorization': process.env.DISCORD_BOT_AUTHORIZATION_HEADER || 'no_secret',
				'x-hasura-role': 'discord-bot',
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

### LogDNA

LogDNA (now [mezmo.com](https://www.mezmo.com/)) was the service for logging that was implemented originally in the app.

### Sentry

[Sentry](https://sentry.io/) for application monitoring and error tracking
