import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <EventList items={featuredEvents} />
      </main>
    </>
  );
}

export default HomePage;
