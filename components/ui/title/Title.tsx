import { titleFont } from "@/config/fonts";

interface Props{
    title:string;
    subtitle?:string;
    className?:string
}

export default function({title,subtitle,className}:Props) {
  return (
    <div className={`mt-t ${className}`}>
      <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-7`}>
        {title}
      </h1>
      {
        subtitle && (
            <h3 className="text-xl mb-5">{subtitle}</h3>
        )
      }
    </div>
  );
}