import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Game } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * TODO:
 * 1. Enhance the carousel functionality for a smoother user experience.
 * 2. Fetch game data from the API/database.
 * 3. Map the fetched data to this component to dynamically generate game items.
 * 4. Remove the static array currently used for game data once dynamic fetching is implemented.
 */
export default function FeaturedGames() {
  const featuredGames: Game[] = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: "$59.99",
      gameCover: "/images/game.avif",
      shortDescription: "",
    },
    {
      id: 2,
      title: "Call of Duty: Warzone",
      price: "$49.99",
      gameCover: "/images/game.avif",
      shortDescription: "",
    },
    {
      id: 3,
      title: "Fortnite",
      price: "$0.00",
      gameCover: "/images/game.avif",
      shortDescription: "",
    },
    {
      id: 4,
      title: "Minecraft",
      price: "$29.99",
      gameCover: "/images/game.avif",
      shortDescription: "",
    },
    {
      id: 5,
      title: "Tropical Paradise",
      price: "$29.99",
      gameCover: "/images/game.avif",
      shortDescription: "",
    },
  ];

  return (
    <Carousel className="max-w-7xl mx-auto">
      <CarouselContent>
        {featuredGames.map((game: Game) => (
          <CarouselItem key={game.id}>
            <Card>
              <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                <Image
                  src={game.gameCover}
                  alt={game.title}
                  width={800}
                  height={450}
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-70 p-4 rounded w-1/4 max-w-sm">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {game.title}
                  </h2>
                  <p className="text-lg text-white mb-4">{game.price}</p>
                  <Button>Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
