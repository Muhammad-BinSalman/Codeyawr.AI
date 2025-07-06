import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";


export default async function Home() {
  // const trpc = useTRPC();
  // const invoke = useMutation(trpc.invoke.mutationOptions({}))
  return (
   <div className="p-6 bg-slate-200 h-full"> hi
    {/* <Button onClick={(() => invoke.mutate({ text: 'hello saleem' }))}>invoke background Job</Button> */}
   </div>
  );
}
         