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
}
