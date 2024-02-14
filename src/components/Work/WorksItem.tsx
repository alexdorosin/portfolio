export interface WorksItemProps {
  id: number
  image: string
  title: string
  category: string
}

export const WorksItem = ({ image, title }: WorksItemProps) => {
  return (
    <div className="work__card">
      <img src={image} alt={title} className="work__img" />

      <h3 className="work__title">{title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon" />
      </a>
    </div>
  )
}
