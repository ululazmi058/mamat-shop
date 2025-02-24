import React from 'react'


import { useRouter } from 'next/router'
import {data} from '@/dummy/data'
import Layout from '@/components/layout/layout.module'

export default function Detail() {

    const router = useRouter()
    const {id} = router.query

    const product = data.find((item) => item.id === id)

    return (
        <Layout>
            <div>index</div>
        </Layout>
  )
}
