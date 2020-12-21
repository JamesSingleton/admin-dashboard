import PageContainer from './PageContainer';
import Header from './Header';

const Page = ({ title, description, sticky, children}) => (
  <PageContainer title={title} description={description}>
    <Header />
    <main className="mb-auto">
      {children}
    </main>
  </PageContainer>
);

export default Page;