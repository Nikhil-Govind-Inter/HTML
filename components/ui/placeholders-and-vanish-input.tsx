"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@base-ui/react";

type Props = {
  placeholders: string[];
  value: string;
  onChange: (val: string) => void;
};

export function PlaceholdersAndVanishInput({
  placeholders,
  value,
  onChange,
}: Props) {
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isFocused, placeholders.length]);

  return (
    <div className="relative w-full max-w-md">
      {/* Input + Button wrapper */}
      <div className="relative w-full">
        {/* Input */}
        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            w-full
            bg-transparent
            border border-gray-600
            text-white
            px-4
            pr-28   /* 🔥 space for button */
            py-2
            rounded-md
            focus:outline-none
          "
        />

        {/* Button */}
        <Button
          type="submit"
          className="
            absolute
            top-0
            right-0
            h-full
            px-4
            text-[12px]
            bg-red-500
            hover:bg-red-400
            text-white
            font-semibold
            rounded-r-md
          "
        >
          Subscribe
        </Button>
      </div>

      {/* Animated Placeholder */}
      <AnimatePresence mode="wait">
        {!value && !isFocused && (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              pointer-events-none
              text-sm
            "
          >
            {placeholders[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}