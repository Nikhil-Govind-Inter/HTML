"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Heading } from "../utils/header";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const placeholders = [
    "Enter your email",
    "Get latest updates",
    "Subscribe to our newsletter",
    "Stay connected with us",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="w-full py-2">
      <div className="container">
      <div className="mx-auto px-4 md:flex items-center gap-[23px]">
        <Heading as="h3" size="heading3" className="text-white font-normal mb-2">
          Subscribe to our Newsletter
        </Heading>

        <form
          onSubmit={handleSubmit}
          className="flex items-center"
        >
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            value={email}
            onChange={setEmail}
          />
        </form>
      </div>
      </div>
    </div>
  );
}