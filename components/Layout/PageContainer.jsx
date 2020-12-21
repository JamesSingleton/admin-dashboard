import Head from 'next/head';

const PageContainer = ({ title, description, children, shouldIndex = true }) => (
  <div className="flex flex-col h-screen">
    <Head>
      <title>{title}</title>
      {description !== false && (
        <meta
          name="description"
          content={description}
        />
      )}
      {!shouldIndex && <meta name="robots" content="noindex" />}
    </Head>
    {children}
  </div>
);

export default PageContainer;