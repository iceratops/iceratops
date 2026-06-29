import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage } from '@/content/site'

export function WhatWeDo() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.whatWeDo.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.whatWeDo.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.whatWeDo.description}</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {homePage.whatWeDo.items.map((item) => (
            <Card key={item.title}>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
