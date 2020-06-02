# Adonis API application

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b7d060ae618e4c93b5599ee72e66633b)](https://app.codacy.com/manual/leodaiub/twitter-clone-api?utm_source=github.com&utm_medium=referral&utm_content=leodaiub/twitter-clone-api&utm_campaign=Badge_Grade_Dashboard)

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
