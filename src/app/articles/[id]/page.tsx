import { getDetailArticles } from '@/blogAPI';
import Image from 'next/image';
import React from 'react'

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailArticles(params.id);
  console.log(detailArticle);

  return (
    <div className='max-w-3xl mx-auto p-5'>
        <Image
            src="https://picsum.photos/800"
            alt=""
            width={1280}
            height={300}
        />
        <h1 className='text-4xl text-center mb-10 mt-10'>ここがタイトルです。</h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>ここが本文です。</p>
        </div>
    </div>
  );
};

export default Article;