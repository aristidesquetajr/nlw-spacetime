import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  app.get('/memories/:id', async (request) => {
    const { id } = request.params

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  app.post('/memories', async (request) => {
    const { coverUrl, content, isPublic } = request.body

    const memory = await prisma.memory.create({
      data: {
        coverUrl,
        content,
        isPublic,
        userId: '96c4d0af-c14e-4131-b10c-30fb38a2b334',
      },
    })

    return memory
  })

  app.put('/memories/:id', async (request) => {
    const { id } = request.params

    const { coverUrl, content, isPublic } = request.body

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        coverUrl,
        content,
        isPublic,
      },
    })

    return memory
  })

  app.delete('/memories/:id', async (request) => {
    const { id } = request.params

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
