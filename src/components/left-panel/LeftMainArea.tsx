import Image from "next/image";

export function LeftMainArea() {
  return (
    <div className="flex-[5] min-w-0">
      <Image
        src="/8146bbb02c2c76f3a5fb7787922b9ab3.jpg"
        alt="主要区域图片"
        width={800}
        height={600}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

