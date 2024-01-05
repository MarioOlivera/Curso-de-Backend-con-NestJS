import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

    @Get()
    index()
    {
        return {message: 'index brands'}
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
