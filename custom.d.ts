declare namespace NodeJS {
  interface ProcessEnv {
    MYSQL_HOST: string;
    MYSQL_USER: string;
    MYSQL_DATABASE_NAME: string;
    MYSQL_PASSWORD: string;
  }
}
