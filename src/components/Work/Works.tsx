import { useEffect, useState } from "react"

import { PROJECTS_DATA, PROJECTS_NAV } from "./Data"
import { WorksItem, WorksItemProps } from "./WorksItem"

export const Works = () => {
  const [item, setItem] = useState({ name: "all" })
  const [projects, setProjects] = useState<WorksItemProps[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === "all") {
      setProjects(PROJECTS_DATA)
    } else {
      const filteredProjects = PROJECTS_DATA.filter(
        (project) => project.category === item.name,
      )
      setProjects(filteredProjects)
    }
  }, [item])

  return (
    <div>
      <div className="work__filters">
        {PROJECTS_NAV.map((item, index) => {
          return (
            <span
              onClick={() => {
                setItem({ name: item.name })
                setActive(index)
              }}
              className={`work__item ${active === index && "active-work"}`}
              key={index}
            >
              {item.name}
            </span>
          )
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItem {...item} key={item.id} />
        })}
      </div>
    </div>
  )
}
