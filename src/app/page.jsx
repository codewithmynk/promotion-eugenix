import ClientHome from '../components/ClientHome';

export default async function Home() {
  let initialData = null;
  try {
    const url = 'https://promotion.eugenixhairsciences.com/bhubaneswar/wp-json/eugenix/v1/landing-page?id=9';
    const res = await fetch(url);
    if (res.ok) {
      initialData = await res.json();
    }
  } catch (err) {
    console.error("Home page build failed to fetch API data:", err);
  }

  return (
    <ClientHome initialData={initialData} />
  );
}
