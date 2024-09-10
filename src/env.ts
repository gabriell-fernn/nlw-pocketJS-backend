import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)

// processes.env é de onde vem a varaivel ambiente no caso a URL do banco
// o parse verifica se o database_url retorna o formato correto (string e url)
