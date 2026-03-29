import ClientHome from '../../components/ClientHome';

// Since we are exporting a static site using "output: export",
// Next.js needs to know exactly which physical folders to create.
// You can add as many slugs here as you ever need!
export function generateStaticParams() {
  return [
    { slug: 'home' },
    { slug: 'hair-transplant-social' },
    { slug: 'hair-transplant-google' },
    { slug: 'bhubaneswar' }, // Original
  ];
}

export default async function SlugPage(props) {
  const params = await props.params;
  const slug = params.slug;

  let initialData = null;
  try {
    const url = `https://promotion.eugenixhairsciences.com/bhubaneswar/wp-json/eugenix/v1/landing-page?slug=${slug}`;
    const res = await fetch(url);
    if (res.ok) {
      initialData = await res.json();
    }
  } catch (err) {
    console.error(`Build failed to fetch API data for slug: ${slug}`, err);
  }

  // Pass the pre-fetched data directly into ClientHome to completely skip loading screens
  return <ClientHome initialData={initialData} />;
}
