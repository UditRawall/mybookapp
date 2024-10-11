

export const BookCard = ({title , description,coverImage,onClick}) => {
  return (
    <div class="w-48 p-4 rounded-md bg-[#f8eadd] shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 mb-6 mr-6">
        <img src={coverImage} alt={title} class='w-full rounded-md aspect-1'/>
        <div style={{"marginTop":'1rem'}}>
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
        </div>
</div>

  )
}


const titleStyle = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color:'#000'
};

const descriptionStyle = {
  fontSize: '0.8rem',
  color: '#888',
};