import React, { useContext } from "react"
import styled from "styled-components"

// Components
import { AppContext } from "./AppContext"
import Collapse from "./Collapse"

// Styles
const PromptsDesktopStyled = styled.div`
  background-color: #fff;
  display: none;
  padding: 2rem 1rem;
  max-height: 100vh;
  overflow-y: scroll;
  width: 25%;

  @media (min-width: 992px) {
    display: block;
    flex-basis: 35%;
  }

  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
`

const PromptsDesktop = () => {
  const { prompts } = useContext(AppContext)

  return (
    <PromptsDesktopStyled>
      {prompts.map((prompt, index) => (
        <Collapse key={`collapse-${index}`} prompt={{ ...prompt, index }} />
      ))}
    </PromptsDesktopStyled>
  )
}

export default PromptsDesktop
