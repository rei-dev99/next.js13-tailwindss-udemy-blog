import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://picsum.photos/600"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.js勉強中</Link>
          <p>By shincode, Published on 2024/08/22</p>
          <a href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            distinctio autem ad illo, adipisci, doloremque tenetur dignissimos,
            facere veritatis modi odio sapiente nobis reprehenderit iste error!
            Voluptate id temporibus ab!
          </a>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default page;
