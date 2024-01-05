import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    index(){
        return {message: 'index users'}
    }

    @Post()
    create(@Body() payload: any)
    {
        return {
            message: "create",
            payload
        }
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any)
    {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number)
    {
        return {
            id,
            response: true
        }
    }
}
