import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello next hero
      <Heading></Heading>
      <button>call me</button>
    </main>
  );
}
