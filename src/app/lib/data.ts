'use server'
import { PrismaClient } from '@prisma/client'

export const getUserData = async () => {
  const prisma = new PrismaClient()
  let users = null

  try {
    users = await prisma.user.findMany()
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
    return users
  }
}
