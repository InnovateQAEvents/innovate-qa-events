"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Author {
  id: string
  title: string
  author: string
  image: string
  description?: string
}

interface AuthorCardProps {
  author: Author
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-colors flex flex-col h-full">
      <div className="aspect-[3/4] overflow-hidden bg-muted -m-px relative">
        <Image
          src={author.image}
          alt={author.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{author.title}</h3>
        <p className="text-primary font-medium mb-2">{author.author}</p>
        {author.description && (
          <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
            {author.description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
