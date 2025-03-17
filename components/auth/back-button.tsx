import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button variant="link" asChild className="w-full font-normal">
      <Link href={href}> {label}</Link>
    </Button>
  );
}

export default BackButton;
