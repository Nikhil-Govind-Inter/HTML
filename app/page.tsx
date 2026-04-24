import HomeHero from "@/components/features/home/home-hero";




const localData = {
  home_hero: {
    media:{
      type: "image",
      path: "/Images/Neurology 1.jpg",
      mobile_path: "/Images/Orthopaedic 1.jpg",
      alt: "Neurology"
    },
    title: "Welcome to Our Clinic",
    description: `<p>Providing quality healthcare services for you and your family.</p>`
  }

}


export default function Home() {
  return (
      <main>
        <HomeHero data={localData?.home_hero}/>
      </main>
  );
}
