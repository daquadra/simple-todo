import { prisma } from "./prisma"

export interface ToDo {
    id: number,
    description: string
}

export async function getAllToDos() {
    const data = await prisma.todo.findMany()
    return data
}

export async function createToDo(description: string) {
    await prisma.todo.create({
        data: {
            description
        }
    })
}