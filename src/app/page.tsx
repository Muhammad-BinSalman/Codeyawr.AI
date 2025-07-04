import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {
  const data = await caller.hello({text:"hello!!"});
  return (
   <div>{JSON.stringify(data)}</div>
  );
}
         