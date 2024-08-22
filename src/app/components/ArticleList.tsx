import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ArticleList() {
  return (
    <div>
      <article className='shadow my-4 flex flex-col'>
        <Link href="#" className='hover:opacity-75'>
          <Image
            src="https://picsum.photos/800"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Next.js勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'>Published on 2024/08/22</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            distinctio autem ad illo, adipisci, doloremque tenetur dignissimos,
            facere veritatis modi odio sapiente nobis reprehenderit iste error!
            Voluptate id temporibus ab!
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
      <article className='shadow my-4 flex flex-col'>
        <Link href="#" className='hover:opacity-75'>
          <Image
            src="https://picsum.photos/800"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Next.js勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'>Published on 2024/08/22</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            distinctio autem ad illo, adipisci, doloremque tenetur dignissimos,
            facere veritatis modi odio sapiente nobis reprehenderit iste error!
            Voluptate id temporibus ab!
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;