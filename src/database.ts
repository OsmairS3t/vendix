import { knex as configKnex } from 'knex'
// https://vercel.com/osmair-moreira-de-araujos-projects/~/stores/postgres/store_4Z5M9FUZoZhxLkRe/guides

export const knex = configKnex({
  client: 'pg',
  connection: {
    connectionString:
      'postgresql://postgres:postgres@localhost:5433/patrimonio?schema=public',
  },
})
