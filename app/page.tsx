import HomeHero from "@/components/features/home/home-hero";
import HomeSlider from "@/components/features/home/home-slider";


const localData = {
  home_hero: [
    {
      media: {
        type: "image" as const,
        desktop_path: "/Images/Neurology 1.jpg",
        mobile_path: "/Images/Orthopaedic 1.jpg",
        poster: "/Images/Orthopaedic 1.jpg",
        media_alt: "Neurology"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        desktop_path: "/Images/Mental Health 1.jpg",
        mobile_path: "/Images/Orthopaedic 1.jpg",
        poster: "/Images/Mental Health 1.jpg",
        media_alt: "Mental Health"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        desktop_path: "/Images/Health Screening 1.jpg",
        mobile_path: "/Images/Mental Health 1.jpg",
        poster: "/Images/Mental Health 1.jpg",
        media_alt: "Mental Health"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        desktop_path: "/Images/Pediatrics 1.jpg",
        mobile_path: "/Images/Health Screening 1.jpg",
        poster: "/Images/Orthopaedic 1.jpg",
        media_alt: "Neurology"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        desktop_path: "/Images/Ophthalmology 1.jpg",
        mobile_path: "/Images/Pediatrics 1.jpg",
        poster: "/Images/Pediatrics 1.jpg",
        media_alt: "Neurology"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
  ],

  home_cards: [
    {
      media: {
        media_path: "/Images/Orthopaedic 1.jpg",
        media_alt: "Orthopaedic",
      },
      title: "Orthopaedic"
    },
    {
      media: {
        media_path: "/Images/Neurology 1.jpg",
        media_alt: "Neurology",
      },
      title: "Neurology"
    },
    {
      media: {
        media_path: "/Images/Mental Health 1.jpg",
        media_alt: "Mental Health",
      },
      title: "Mental Health"
    },
    {
      media: {
        media_path: "/Images/Health Screening 1.jpg",
        media_alt: "Health Screening",
      },
      title: "Health Screening"
    },
    {
      media: {
        media_path: "/Images/Pediatrics 1.jpg",
        media_alt: "Pediatrics",
      },
      title: "Pediatrics"
    },
    {
      media: {
        media_path: "/Images/Ophthalmology 1.jpg",
        media_alt: "Ophthalmology",
      },
      title: "Ophthalmology"
    },
  ]
}


export default function Home() {
  return (
    <main>
      <HomeHero slides={localData?.home_hero} />
      <HomeSlider cards={localData?.home_cards} />
    </main>
  );
}
