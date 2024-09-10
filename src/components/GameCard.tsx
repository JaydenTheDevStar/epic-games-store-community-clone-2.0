"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type GameCardProps = {
  image_url: string;
  title: string;
  price: number;
  game_type: string; // Should be an enum
  discount?: number;
};

export default function GameCard({
  image_url,
  title,
  price,
  game_type,
  discount,
}: GameCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Card className="space-y-1 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] border-none shadow-none">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image_url}
          alt={`${title} poster`}
          height={480}
          width={360}
          className="rounded-lg object-cover "
        />
        <div
          className={`absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg`}
        />
        <Button
          size="icon"
          className={`absolute top-2 right-2 h-8 w-8 rounded-full transition-opacity duration-300 bg-black ${
            isHovered ? "opacity-100  ring-2 ring-white" : "opacity-0 "
          }`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="justify-around space-y-2">
        <div className="space-y-1">
          <p className="text-muted-foreground font-medium text-sm">
            {game_type}
          </p>
          <p className="leading-5 line-clamp-2 font-black text-lg">{title}</p>
        </div>
        {discount ? (
          <div className="flex w-full justify-between items-center">
            <Badge className="bg-app-discountColor rounded-full max-h-6">{`-${discount}%`}</Badge>
            <div className="flex flex-col">
              <p className="p-0 px-1 font-semibold line-through">
                {`$${price}`}
              </p>
              <p className="p-0 px-1 font-semibold">{`$${(
                price -
                (price * discount) / 100
              ).toFixed(2)}`}</p>
            </div>
          </div>
        ) : (
          <p className="p-0 px-1 font-semibold">{`$${price}`}</p>
        )}
      </div>
    </Card>
  );
}
