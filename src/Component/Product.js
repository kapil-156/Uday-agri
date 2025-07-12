import Image from "next/image";
export default function ProductCard({ name, image, description, price }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 max-w-sm">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="h-48 w-full object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-700 mt-1">{description}</p>
      {price && <p className="text-green-700 font-semibold mt-2">{price}</p>}
    </div>
  );
}

      
