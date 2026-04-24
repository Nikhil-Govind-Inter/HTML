import HomeHero from "@/components/features/home/home-hero";
import HomeSlider from "@/components/features/home/home-slider";




const localData = {
  home_hero: [
    {
      media: {
        type: "image" as const,
        path: "/Images/Neurology 1.jpg",
        mobile_path: "/Images/Orthopaedic 1.jpg",
        poster: "/Images/Orthopaedic 1.jpg",
        alt: "Neurology"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        path: "/Images/Mental Health 1.jpg",
        mobile_path: "/Images/Orthopaedic 1.jpg",
        poster: "/Images/Mental Health 1.jpg",
        alt: "Mental Health"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        path: "/Images/Health Screening 1.jpg",
        mobile_path: "/Images/Mental Health 1.jpg",
        poster: "/Images/Mental Health 1.jpg",
        alt: "Mental Health"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        path: "/Images/Pediatrics 1.jpg",
        mobile_path: "/Images/Health Screening 1.jpg",
        poster: "/Images/Orthopaedic 1.jpg",
        alt: "Neurology"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
    {
      media: {
        type: "image" as const,
        path: "/Images/Ophthalmology 1.jpg",
        mobile_path: "/Images/Pediatrics 1.jpg",
        poster: "/Images/Pediatrics 1.jpg",
        alt: "Neurology"
      },
      title: "Welcome to Our Clinic",
      description: `<p>Providing quality healthcare services for you and your family.</p>`
    },
  ],

  home_cards: [
    {
      media: {
        path: "/Images/Orthopaedic 1.jpg",
        alt: "Orthopaedic",
      },
      title: "Orthopaedic"
    },
    {
      media: {
        path: "/Images/Neurology 1.jpg",
        alt: "Neurology",
      },
      title: "Neurology"
    },
    {
      media: {
        path: "/Images/Mental Health 1.jpg",
        alt: "Mental Health",
      },
      title: "Mental Health"
    },
    {
      media: {
        path: "/Images/Health Screening 1.jpg",
        alt: "Health Screening",
      },
      title: "Health Screening"
    },
    {
      media: {
        path: "/Images/Pediatrics 1.jpg",
        alt: "Pediatrics",
      },
      title: "Pediatrics"
    },
    {
      media: {
        path: "/Images/Ophthalmology 1.jpg",
        alt: "Ophthalmology",
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
