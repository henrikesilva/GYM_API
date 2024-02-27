import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr', // ou 'web', dependendo do seu caso
  async setup() {
    console.log('Setup')

    return {
      teardown() {
        console.log('Depois dos testes')
      },
    }
  },
}
