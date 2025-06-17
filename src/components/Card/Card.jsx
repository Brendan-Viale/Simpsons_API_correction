const Card = ({title, img, children}) => {
  return (
    <div>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default Card