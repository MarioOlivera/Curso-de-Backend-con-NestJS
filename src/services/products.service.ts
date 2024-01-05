import { Injectable, NotFoundException } from '@nestjs/common';

import {Product} from './../entities/product.entity'
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {

    private counterId = 1;

    private products : [Product]  = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Descripción del producto',
            price: 122,
            stock: 125,
            image: 'default.jpg'
        }
    ];

    findAll()
    {
        return this.products
    }

    findOne(id: number)
    {
        const product = this.products.find((item) => item.id === id)

        if(!product)
        {
            throw new NotFoundException(`Product ${id} not found`);
        }

        return product
    }

    create(payload: CreateProductDto)
    {
        this.counterId++

        const newProduct = {
            id: this.counterId,
            ...payload
        }

        this.products.push(newProduct)

        return newProduct
    }

    update(id: number, payload: UpdateProductDto)
    {
        const product = this.findOne(id)

        if(!product)
        {
            throw new NotFoundException(`Product ${id} not found`);
        }

        const index = this.products.findIndex(item => item.id === id)

        if(index >= 0)
        {
            this.products[index] = {
                ...product,
                ...payload
            }

            return this.products[index]
        }
        
        return null
    }

    delete(id: number)
    {
        const product = this.findOne(id)

        if(!product)
        {
            throw new NotFoundException(`Product ${id} not found`);
        }

        const index = this.products.findIndex(item => item.id === id)

        if(index >= 0)
        {
            this.products.splice(index,1)
            return true
        }

        return false
    }
}
