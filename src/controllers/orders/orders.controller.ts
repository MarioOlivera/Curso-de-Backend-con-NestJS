import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    @Get()
    index(){
        return { message: 'Orders index'};
    }

    @Post()
    create(@Body() payload)
    {
        return {
            message: "create",
            payload
        }
    }

    @Put(':id')
    update(@Param('id') id : number, @Body() payload)
    {
        return {id, payload}
    }

    @Delete(':id')
    delete(@Param('id') id:number)
    {
        return {id}
    }
}
