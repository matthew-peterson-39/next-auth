
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

### Google OAuth
