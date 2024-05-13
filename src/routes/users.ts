import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { knex } from '../database'
import { z } from "zod"

export async function userRoutes(app: FastifyInstance) {
  app.get('/', () => {
    const users = [
      {
        email: 'osmair144@gmail.com',
        name: 'Osmair M. Araujo',
        password: '123456'
      }
    ]
    return users
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const createUserBodySchema = z.object({
      email: z.string(),
      name: z.string(),
      password: z.string(),
    })
    const body = createUserBodySchema.parse(request.body)
    await knex('products').insert({
      email: body.email,
      name: body.name,
      password: body.password
    })
    return reply.status(201).send()
  })

  app.put('/name', async (request: FastifyRequest, reply: FastifyReply) => {
    const createUserBodySchema = z.object({
      email: z.string(),
      name: z.string(),
    })
    const body = createUserBodySchema.parse(request.body)
    await knex('products')
    .where('email','=',body.email)
    .update({
      name: body.name,
    })
    return reply.status(201).send()
  })

  app.put('/password', async (request: FastifyRequest, reply: FastifyReply) => {
    const createUserBodySchema = z.object({
      email: z.string(),
      password: z.string(),
    })
    const body = createUserBodySchema.parse(request.body)
    await knex('products')
    .where('email','=',body.email)
    .update({
      password: body.password,
    })
    return reply.status(201).send()
  })

  app.delete('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const createUserBodySchema = z.object({
      email: z.string(),
    })
    const body = createUserBodySchema.parse(request.body)
    await knex('products')
    .where('email','=',body.email)
    .del()
    return reply.status(201).send()
  })
}