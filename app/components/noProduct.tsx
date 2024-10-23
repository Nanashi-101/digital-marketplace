import Link from "next/link";
import React from "react";

function NoProduct({text} : {text: string}) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h1 className="text-lg w-[50%] mx-auto bg-primary/10 px-4 py-2 rounded-lg text-muted-foreground/40 tracking-tighter">
        No {text} Found
      </h1>
      <div className="flex items-center gap-2 mt-2">
        <h1 className="text-sm text-muted-foreground font-medium">If you feel lost, Check out the other products.</h1>
        <Link href="/products/all" className="text-primary">All products &rarr;</Link>
      </div>
    </div>
  );
}

export default NoProduct;
