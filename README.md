
# NextAuth V5

## [Auth.js](https://authjs.dev/)

This repo is a template repository that aims to streamline the development of projects using NextAuth.

The repo comes with credential login as well as Google and Github OAuth login.

Another important thing to note is that this repo was made as a template and uses a mixture of server and client components. If you are unfamiliar with Next.js, there are many ways to go about handling the flow of a Next.js application and it largely depends on the developer as well as the project itself to determine which approach to use.

# Technologies

- Next.js
- Tailwind
- Postgresql - [Neon.tech](https://neon.tech/) 
- 
- 2FA & Email Verification - Resend

# Setting .env & Dependencies

1. Install project dependencies

```bash
npm i
```

2. Create a .env file and add it to the .gitignore file if it is not already there for some reason.

### Prisma 

- Create a new project using [Neon.tech](https://neon.tech/). Choose a region that is closest to where your project will be hosted.

- Verify the /prisma/schema.prisma file's datasource db matches the one shown after creating project, then copy the necessary .env variabels from Neon to your projects .env file.

- After adding the .env variables to the project generate the schema using:
```bash
npx prisma generate
```

Followed by: 
```bash
npx prisma db push
```
> NOTE: If you experience an error running the above command, try to run it again and it should resolve on its own.

- To verify success, navigate to Neon -> Tables and you will find tables for each of the models defined in the /prisma/schema.prisma.

### Github OAuth

- Create .env variables for Github.

```bash
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```
- Populate these variables by logging into Github > Settings > Developer settings > OAuth Apps > New OAuth App

- Name the app whatever you want.
- Set the homepage URL to http://localhost:3000
- Set the callbackURL to http://localhost:3000/api/auth/callback/github
- Assign the client ID and client secret to your .env file.

### Google OAuth

- Create .env variables for Google.

```bash
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```
- Populate these variables by navigating to google's api console: https://console.cloud.google.com

- In th navbar at the top, there is a dropdown box that has your projects. Click the box and start a new project.

- Name the project and wait for it to finish setting up before selecting it.
- Once selected, search API & Services and select the one reading 'API & Services. API management for cloud services'.
- Navigate to OAuth consent.
- Select 'External' then press the CREATE button.
- Add the necessary details, skipping over the Domain, App logo, and Authorized domains for now.
- Save and continue.
- If you do not need any special scopes, scroll to the bottom and press save and continue once more.
- Add test user(s) if you want, though this can be done at any point after setup so it is not necessary at the moment.

- From the side bar, click 'Credentials'.
- At the top, select 'CREATE CREDENTIALS'.
- Select OAuth client ID
- Select the application type as 'Web App'
- Add authorized JS origins as http://localhost:3000
- Add authorized redirect URIs w/ http://localhost:3000/api/auth/callback/google
- Create
- Copy the client ID and client secret and paste it into the .env file of your project.

### Resend