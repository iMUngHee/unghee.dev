import { NextPage } from 'next';
import { DocsDataType } from 'pages/posts';
import { TagCloud } from 'react-tagcloud';
import Layout from './Layout/animate';

const customRenderer = (tag: any, size: number) => {
  return (
    <span
      key={tag.value}
      style={{
        fontSize: `${size / 2}em`,
        margin: '0 3px',
        padding: '0 3px',
        display: 'inline-block',
        fontFamily: 'RocknRoll One',
      }}
    >
      {tag.value}
    </span>
  );
};

const Tags: NextPage<DocsDataType> = ({ tagInfo }) => {
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
