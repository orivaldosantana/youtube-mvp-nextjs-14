'use server'
import { PrismaClient } from '@prisma/client'

export const addTeste = async (formData: FormData) => {
  let name = formData.get('nome')
  let email = formData.get('email')
  console.log('Form: ' + name + ' ' + email)
}

export const addUser = async (
  prevState: { message: string },
  formData: FormData
) => {
  let name = formData.get('nome')
  let email = formData.get('email')
  let returnMessage

  console.log(`addUser ${name} ${email}`)

  const prisma = new PrismaClient()

  try {
    await prisma.user.create({
      data: {
        name: name ? name.toString() : '',
        email: email ? email.toString() : ''
      }
    })
    returnMessage = {
      message: 'Usuário adicionado com sucesso!',
      type: 'success'
    }
  } catch (error) {
    console.error(error)
    returnMessage = { message: 'Erro ao adicionar usuário!', type: 'error' }
  } finally {
    await prisma.$disconnect()
    return returnMessage
  }
}
