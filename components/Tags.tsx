import { toggleType } from '@libs/redux/posts';
import { AppDispatch } from '@libs/redux/store';
import { NextPage } from 'next';
import Link from 'next/link';
import { DocsDataType } from 'pages/posts';
import { useDispatch } from 'react-redux';
import { TagCloud } from 'react-tagcloud';
import Layout from './Layout/animate';

const Tags: NextPage<DocsDataType> = ({ tagInfo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const onSelect = () => {
    dispatch(toggleType('recent'));
  };

  const customRenderer = (tag: any, size: number) => {
    return (
      <Link key={tag.value} href={`/posts?tag=${tag.value}`}>
        <a
          onClick={onSelect}
          style={{
            fontSize: `${size / 2}em`,
            margin: '0 3px',
            padding: '0 3px',
            display: 'inline-block',
            fontFamily: 'RocknRoll One',
          }}
        >
          {tag.value}
        </a>
      </Link>
    );
  };

  return (
    <Layout title="Tags">
      <div className="flex h-full w-full items-center justify-center text-left">
        <TagCloud
          tags={tagInfo!}
          maxSize={5}
          minSize={2}
          renderer={customRenderer}
        />
      </div>
    </Layout>
  );
};

export default Tags;
