import { ReactNode } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export default function CardContainer({children}:{children: ReactNode}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
