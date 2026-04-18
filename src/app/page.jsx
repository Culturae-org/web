import Hero from "@/components/sections/hero";
import GamesSection from "@/components/sections/games";
import ClientsSection from "@/components/sections/clients";
import PlatformSection from "@/components/sections/platform";
import Layout from "@/components/layout/layout";

export const metadata = {
  title: "Culturae",
};

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <Hero />
        <PlatformSection />
        <GamesSection />
        <ClientsSection />
      </Layout>
    </div>
  );
}
