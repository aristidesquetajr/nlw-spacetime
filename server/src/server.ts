import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello Friends'
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP server running on\n-> http://localhost:3333'))
