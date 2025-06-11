import { BlogList, BlogListProps } from '@/templates/blog';
import { allPosts } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

export default function BlogPage({ posts }: BlogListProps) {
  return <BlogList posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPost = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return {
    props: {
      posts: sortedPost,
    },
  };
}) satisfies GetStaticProps<BlogListProps>;
