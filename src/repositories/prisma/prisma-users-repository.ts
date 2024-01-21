import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'
import { UsersRespository } from '../users-repository'

export class PrismaUsersRepository implements UsersRespository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
