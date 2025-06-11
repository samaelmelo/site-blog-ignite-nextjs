import { Avatar } from '@/components/avatar';
import Image from 'next/image';
import Link from 'next/link';

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export const PostCard = ({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-[12px] border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* post content */}
      <div className="p-2 rounded-md overflow-hidden ">
        {/* image contaienr */}
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-gray-300 text-body-xs">{date}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>

        {/* post infos */}
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-3 border-t border-gray-400 py-4">
          <Avatar.Container>
            <Avatar.Image src={author.avatar} alt={author.name} />
            <Avatar.Title>{author.name}</Avatar.Title>
          </Avatar.Container>
        </div>
      </div>
    </Link>
  );
};
