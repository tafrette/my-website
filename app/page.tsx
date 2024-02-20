"use client";
import Button from "@/components/Buttons/Button";
import Link from "next/link";

const About = () => {
  return (
    <Link href="/about">
      <Button
        text="Click me"
        onClick={() => console.log("Button clicked!")}
      ></Button>
    </Link>
  );
};

export default About;
