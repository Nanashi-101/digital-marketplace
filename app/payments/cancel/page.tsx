import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function CancelPayment() {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="flex justify-center w-full">
            <XCircle className="w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-xl font-medium text-gray-500 leading-6">Payment Canceled</h3>
            <p className="mt-2 text-sm text-muted-foreground">Something went wrong! Please try again...</p>

            <Button asChild className="mt-5 sm:mt-6 w-full">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default CancelPayment;
