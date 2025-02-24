import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/layout.module'
import Card from '@/components/card/card.module'

import {data, DataProduct} from '@/dummy/data'

export default function Product() {

    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("All")
    const [sort, setSort] = useState<string>("None")
    const router = useRouter()

    const categories = ['All', 'Beras', 'Minyak', 'Gula', 'Telur']
    const sortOptios = ['None', 'Harga Terendah ke Harga Tertinggi', 'Harga Tertinggi ke Harga Terendah']

    const filteredProducts = data
        .filter((product) =>
            category === "All" ? true : product.category === category
        )
        .filter((product) =>
            [product.title, product.description, product.price.toString()].some((field) =>
                field.toLowerCase().includes(search.toLowerCase())
            )    
        )
        .sort((low, high) => {
            if (sort === "Harga Terendah ke Harga Tertinggi")
        })
    
    return (
        <Layout>
            <div className='w-full h-full flex p-5 bg-red-500 text-black'>
                <input
                    type="text"
                    placeholder='Search ...'
                    onChange={(e) => setSearch(e.target.value)}
                    className='border p-2 rounded w-1/2'
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='border p-2 rounded-md'
                >
                    {
                        categories.map((item) => (
                            <option>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    data.map((item: DataProduct) => {
                        return (
                            <Card
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                category={item.category}
                                onClick={() => router.push('product/${item.id}')}
                            />
                        )
                    })
                }
            </div>        
        </Layout>
    )
}
