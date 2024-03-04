import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Page() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <Input>

        export function InputDemo() {
      return <Input type="email" placeholder="Email" />
    }
        <Input />
    </main>
  );
}

export default Page;
