import Image from "next/image"


export const BookCard = ({title , description,coverImage,onClick}) => {
  return (
    <div class="w-48 p-4 rounded-md bg-[#f8eadd] shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 mb-6 mr-6">
        <img src={coverImage} alt={title} classname='w-full rounded-md aspect-1'/>
        <div classname='mt-4'>
            <h3 classname='mb-2 text-xl font-bold text-black'>{title}</h3>
            <p classname='text-xs text-gray-800'>{description}</p>
        </div>
</div>

  )
}
