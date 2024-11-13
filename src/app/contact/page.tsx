"use client";
import formbricks from "@formbricks/js";

if (typeof window !== "undefined") {
  await formbricks.init({
    environmentId: "cm3f498zf00034z16pmll0k80", 
    apiHost: "https://app.formbricks.com",
  });
}

export default function ContactPage() {
  return (
    <main className="bg-gray-500 text-black items-center justify-center h-screen w-screen flex flex-col">
      <h1 className="text-primary text-center text-4xl font-bold mb-8">Contact Me</h1>
        <iframe src="https://app.formbricks.com/s/cm3f49q4k0000jdj6rqi73uh6" className="width-full height-full border-0" />
    </main>
  );
}