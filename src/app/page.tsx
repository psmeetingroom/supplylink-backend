import { SupplyLinkApp } from '@/components/supply-link-app';

export default async function Home() {
  // Data fetching is now handled client-side within SupplyLinkApp using Firestore hooks
  return (
    <main>
      <SupplyLinkApp />
    </main>
  );
}
