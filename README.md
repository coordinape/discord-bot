# Welcome to CO, the Coorinape Discord Bot

With Web3 communities proliferating and thriving on Discord, Coordinape is
bringing Circle assignment and Epoch alert functionality to Discord! CO
is developed for the purpose of automating Circle assignment, so you can
spend less time signing up members and more time producing and building.

## Getting Started

Copy `.env.example` to `.env`

Create your own discord bot https://discord.com/developers/applications

Once you have a bot, add the values to the following environment variables in your `.env`

```
DISCORD_BOT_CLIENT_ID=
DISCORD_BOT_CLIENT_SECRET=
DISCORD_BOT_REDIRECT_URI=http://localhost:3000/discord/link
```

You can find the client id and secret in the `Settings > OAuth2 > General` section of your [application](https://discord.com/developers/applications)

For the other set of environment variables, the `DISCORD_BOT_APPLICATION_ID` is the same as `DISCORD_BOT_CLIENT_ID`.

The public key will be found in `Settings > General Information` section and token will be found in the `Settings > Bot` section

```
DISCORD_BOT_APPLICATION_ID=
DISCORD_BOT_PUBLIC_KEY=
DISCORD_BOT_TOKEN=
```

[Sentry](https://sentry.io/) is used for application monitoring and error tracking, create a sentry DSN and add it to the following env var:

```
SENTRY_IO_DSN=
```

Enable the feature flag `'discord'`

Go back to the discord application page, navigate to `OAuth2 > URL Generator` and in "Redirects" add the following URLs:

http://localhost:3000/discord/link

Then, go to "URL Generator", select the "Identity" scope, select the url http://localhost:3000/discord/link and copy the generated url to your browser.

You should be redirected to https://discord.com/oauth2/authorize where you can authorize the bot/application.

Once you're authorized you should be redirected to coordinape where you'll need to click the "Link" button, once clicked your snowflake id will be stored in coordinape's database.

## CO Development

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
