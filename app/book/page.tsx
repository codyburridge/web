import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '6024c81a-6df1-48f7-8fbd-e72f800b19b6/Front+copy+A+Different+View.jpg', title: 'Cover' },
  { file: '1738946199045-23DFAQA6IAB6G9OL4PV2/pg%2B1.jpg', title: 'Page 1' },
  { file: '1738946200057-HFK780PPOV6OMDVRR2B8/pg%252B2.jpg', title: 'Page 2' },
  { file: '1738946201342-TIHYQSHWCOAEY3S2OZZ4/pg%2B3.jpg', title: 'Page 3' },
  { file: '1738946202421-RDNRLAOGVAOANAPJZ6FU/pg%2B4.jpg', title: 'Page 4' },
  { file: '1738946203564-NTIFYY7CA94N2FZYUKM7/pg%2B5.jpg', title: 'Page 5' },
  { file: '1738946204647-1XE64UZFBARON3BOCX88/pg%2B6.jpg', title: 'Page 6' },
  { file: '1738946205870-VKUJDBVUN9XOF0KJN75G/pg%2B7.jpg', title: 'Page 7' },
]

export default function Book() {
  return (
    <CollectionPage
      title="A Different View — The Book"
      year="2026"
      pieces={8}
      description="The collector edition — 'A Different View Vol. I' in print. Limited run, signed and numbered."
      artworks={artworks}
      heroBgFile="6024c81a-6df1-48f7-8fbd-e72f800b19b6/Front+copy+A+Different+View.jpg"
    />
  )
}
