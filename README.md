# task-mate Todo App

## Running development server

### Initialize development database in docker

This App uses a docker based mysql database. Run 

`docker-compuse build && docker-compose up -d`

to download the mysql image and start the docker container. Next run

`docker exec -i NAME_OF_YOUR_DOCKER_CONTAINER sh -c 'mysql -uroot -p "$MYSQL_ROOT_PASSWORD"  $MYSQL_DATABASE' < db/schema.sql`

to get local access to the development database.

### Install dependencies and run dev server 
`npm install`
`npm run dev`

## Info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

App based on the udemy course [Using TypeScript with React]( https://www.udemy.com/course/react-with-typescript/ )

