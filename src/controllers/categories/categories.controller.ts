import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    index()
    {
        return {message: 'index categories'}
    }

    @Get('/:id/products/:productId')
    getCategory(@Param('id') id: string, @Param('productId') productId: string){
        return `id: ${id} -  productId: ${productId}`
    }

    @Post()
    create(@Body() payload)
    {
        return {
            message: "create",
            payload
        }
    }

    @Put(":id")
    update(@Param("id") id: number, payload: any)
    {
        return {payload: payload, id}
    }

    @Delete(":id")
    delete(@Param("id") id: number)
    {
        return {id, response: true}
    }
}
