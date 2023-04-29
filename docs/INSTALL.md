# Install

## Configuration Setup

Before the bot is ready to run there are a few configuration items that should be done. First few steps can be done following
the [discord.js guide](https://discordjs.guide/#before-you-begin);

### 1. Create environment file

Please create a `.env` with the keys copied from .env.example.

For these keys below

```
DISCORD_BOT_TOKEN=<taken from discord bot applciation page>
DISCORD_BOT_PUBLIC_KEY=<taken from discord application PUBLIC KEY>
DISCORD_BOT_APPLICATION_ID=<taken from discord application APPLICATION ID>

# Sentry
SENTRY_IO_DSN=<taken from sentry.io project settings>

```

you'll need to create bot on the Discord side following the Generate bot token step.

TODO: add more instructions on this step.

### 2. Generate bot token

[https://discordjs.guide/preparations/setting-up-a-bot-application.html](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
Create your own discord application and then grab your bot token.

Retrieve the App's client ID
![](images/create_app.png)

Retrieve the bot token
![](images/create_bot.png)

### 3. Invite bot to your personal discord

[https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
The newly created bot should be invited to your own discord space/server.

```
https://discord.com/oauth2/authorize?client_id=REPLACE_THIS_HERE&scope=bot+applications.commands
```

### 4. Enable Developer Mode

There should be a small cog near your icon photo labeled "User Settings". Hitting that will allow you to enable developer mode  
![](images/discord_developer_mode.png)

### 5. Run application

```
npm install
npm run build
npm run start
```
