'use server'
import { PrismaClient } from '@prisma/client'

export const addTeste = async (formData: FormData) => {
  let name = formData.get("nome")
  let email = formData.get("email")
  console.log("Form: " + name + " " + email)
}

export const addUser = async (formData: FormData) => {
  let name = formData.get('nome')
  let email = formData.get('email')

  console.log(`addUser ${name} ${email}`)

  const prisma = new PrismaClient()

  try {
    await prisma.user.create({
      data: {
        name: name.toString(),
        email: email.toString(),

      }
    })
   
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
