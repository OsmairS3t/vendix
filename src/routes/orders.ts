import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'

export async function orderRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const orders = [
      {id:'1', name: 'Bombom - Brigadeiro'},
      {id:'2', name: 'Bombom - Amendoim'},
      {id:'3', name: 'Bombom - Chocolate'},
      {id:'4', name: 'Bombom - Coco'}
    ]
    return orders
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const createProductBodySchema = z.object({
      name: z.string(),
    })
    const body = createProductBodySchema.parse(request.body)

    await knex('orders').insert({
      name: body.name,
    })
    return reply.status(201).send()
  })

}
