import AuthForm from "@/components/AuthForm";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <div className="flex pt-16 pl-16 flex-col">
          <h1 className="font-bold text-2xl">💰 TRANSC</h1>
          <h2 className="text-lg font-bold py-4">
            The simplest way <br /> to manage your finances.
          </h2>
          <p className="pt-4 pb-8">
            Streamline, organize and optmize: unleashing the power <br /> of
            financial management.
          </p>
        </div>
        <div className="flex justify-end items-end pl-16">
          <Image
            src="/authImage.png"
            alt="hero"
            width={500}
            height={600}
            className=" "
          />
        </div>
      </div>
      <div className="flex flex-1 bg-foreground justify-center items-center ">
        {children}
      </div>
    </div>
  );
}
