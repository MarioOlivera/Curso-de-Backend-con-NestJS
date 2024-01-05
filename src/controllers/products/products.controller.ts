import { 
    Controller,
    Get,
    Param,
    //Query,
    Post,
    Body,
    Put,
    Delete,
    HttpStatus,
    //HttpCode,
    Res,
    //ParseIntPipe
} from '@nestjs/common';

import {
    Response,
    //Request
} from 'express'

import {ProductsService} from './../../services/products.service'

import {ParseIntPipe} from './../../common/parse-int.pipe'

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    // query params
    @Get()
    //getProducts(@Query() params: any)
    getProducts(
        //@Query('limit') limit: number = 10, 
        //@Query('offset') offset: number = 0, 
        //@Query('brand') brand: string = ""
    )
    {
        //const {limit, offset} = params;

        return this.productsService.findAll()
    }

    @Get('/filter')
    getProductFilter()
    {
        return { message: `the filter` }
    }
    
    @Get('/:id')
    //@HttpCode(HttpStatus.ACCEPTED)
    //getProduct(@Param() params: any)
    getProduct(
        @Res() response: Response,
        @Param('id', ParseIntPipe) id: number
    )
    {
        response.status(HttpStatus.ACCEPTED).send(this.productsService.findOne(id))
    }

    @Post()
    create(
        @Res() response: Response,
        @Body() payload: CreateProductDto
    )
    {
        console.log("create",payload)
        response.status(HttpStatus.CREATED).send(
            this.productsService.create(payload)
        );
    }

    @Put(':id')
    update(
        @Res() response: Response,
        @Param('id',ParseIntPipe) id: number, @Body() payload: UpdateProductDto)
    {
        response.status(HttpStatus.ACCEPTED).send(this.productsService.update(id, payload));
    }

    @Delete(':id')
    delete(
        @Res() response : Response,
        @Param('id',ParseIntPipe) id: number
    )
    {
        response.status(HttpStatus.ACCEPTED).send({deleted: this.productsService.delete(id)})
    }

}
