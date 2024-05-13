import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { orderRoutes } from './routes/orders'
import { productRoutes } from './routes/products'
import { userRoutes } from './routes/users'

const fastify: FastifyInstance = Fastify({logger: true})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.register(userRoutes, {
  prefix: 'users',
})

fastify.register(productRoutes, {
  prefix: 'products',
})

fastify.register(orderRoutes, {
  prefix: 'orders',
})

fastify.listen({ port: 4444, host: '192.168.1.93' }).then(() => {
  console.log('HTTP Server Running!')
})
