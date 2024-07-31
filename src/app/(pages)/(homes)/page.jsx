import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 h-screen">
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-black text-[40px] font-bold mb-[40px]">GIẢI THÍ NGHIỆM HOÁ ĐẠI CƯƠNG</h1>
          <div>
            <Link className="inline-block p-[20px] text-[18px] font-medium bg-orange-500" href={'/lab2'}>Lab 2</Link>
            <Link className="inline-block p-[20px] text-[18px] font-medium bg-orange-500" href={'/lab4'}>Lab 4</Link>
            <Link className="inline-block p-[20px] text-[18px] font-medium bg-orange-500" href={'/lab8'}>Lab 8</Link>
          </div>
        </div>
      </main>
    </>
  );
}
