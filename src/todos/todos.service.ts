import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodosService {
    constructor(private prisma: PrismaService) {}

    async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
        return this.prisma.todo.create({
            data,
        })
    }

    async updateTodo(params: {
        where: Prisma.TodoWhereUniqueInput;
        data: Prisma.TodoUpdateInput;
    }): Promise<Todo> {
        const { data, where } = params;
        return this.prisma.todo.update({
            data,
            where,
        });
    }

    async getTodoOne(todoWhereUniqueInput: Prisma.TodoWhereUniqueInput): Promise<Todo> {
        return this.prisma.todo.findUnique({
            where: todoWhereUniqueInput
        })
    }

    async getTodoAll(params: {where?: Prisma.TodoWhereInput}): Promise<Todo[]> {
        const { where } = params
        return this.prisma.todo.findMany({
            where
        })
    }

    async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
        return this.prisma.todo.delete({
            where
        })
    }
}
