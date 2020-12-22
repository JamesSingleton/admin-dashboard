import Page from '@/components/Layout/Page'
import StatsCard from '@/components/StatsCard';

export default function Home() {
  return (
    <Page>
      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <StatsCard
            title="Income"
            badgeText="Monthly"
            badgeBgColor=""
            
          />
          <StatsCard
            title="Orders"
            badgeText="Monthly"
            badgeBgColor=""
          />
          <StatsCard
            title="Visits"
            badgeText="Monthly"
            badgeBgColor=""
          />
          <StatsCard
            title="Conversions"
            badgeText="Today"
            badgeBgColor=""
          />
        </div>
      </section>
    </Page>
  );
}
