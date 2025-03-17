import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import BackButton from "./back-button";
import Social from "./social";
import { IconType } from "react-icons/lib";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  headerTitle: string;
  backButtonHref: string;
  ShowSocial: boolean;
  icon: IconType;
}

function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  ShowSocial = true,
  headerTitle,
  icon,
}: CardWrapperProps) {
  return (
    <Card className="w-[500px] shadow-lg">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} icon={icon} />
      </CardHeader>
      <CardContent>{children} </CardContent>

      {ShowSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
