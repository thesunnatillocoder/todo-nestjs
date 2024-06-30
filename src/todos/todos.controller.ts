import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '@prisma/client';
import { TodoDto } from './todos.dto';


@Controller('todos')
export class TodosController {
    
    constructor(private readonly todoService: TodosService){}

    @Post('create')
    async createTodo(@Body() todoData: TodoDto): Promise<Todo> {
        const { title, desc } = todoData;
        return this.todoService.createTodo({
            title,
            desc
        })
    }

    @Get('post/:id')
    async getTodoOne(@Param('id') id: string): Promise<Todo> {
        return this.todoService.getTodoOne({
            id: Number(id)
        })
    }

    @Get('all')
    async getTodoAll(id: number, title: string, desc: string): Promise<Todo[]> {
        return this.todoService.getTodoAll({
            where: {title, desc}

        })
    }

    @Put('edit/:id')
    async updateTodo(@Param('id') id: string, @Body() todoData: TodoDto): Promise<Todo> {
        return this.todoService.updateTodo({
            where: { id: Number(id) },
            data: todoData
        });
    }

    @Delete('delete/:id')
    async deleteTodo(@Param('id') id: string): Promise<Todo> {
        return this.todoService.deleteTodo({id: Number(id)})
    }
}
