import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '@prisma/client';


@Controller('todos')
export class TodosController {
    
    constructor(private readonly todoService: TodosService){}

    @Post('create')
    async createTodo(@Body() todoData: {title: string; desc: string}): Promise<Todo> {
        const { title, desc } = todoData;
        return this.todoService.createTodo({
            title,
            desc
        })
    }

}
