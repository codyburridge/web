import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '6024c81a-6df1-48f7-8fbd-e72f800b19b6/Front+copy+A+Different+View.jpg', title: 'Cover' },
  { file: '1738946199045-23DFAQA6IAB6G9OL4PV2/pg%2B1.jpg', title: 'Page 1', objPos: 'right center' },
  { file: '1738946200057-HFK780PPOV6OMDVRR2B8/pg%252B2.jpg', title: 'Page 2', objPos: 'right center' },
  { file: '1738946201342-TIHYQSHWCOAEY3S2OZZ4/pg%2B3.jpg', title: 'Page 3', objPos: 'right center' },
  { file: '1738946202421-RDNRLAOGVAOANAPJZ6FU/pg%2B4.jpg', title: 'Page 4', objPos: 'right center' },
  { file: '1738946203564-NTIFYY7CA94N2FZYUKM7/pg%2B5.jpg', title: 'Page 5', objPos: 'right center' },
  { file: '1738946204647-1XE64UZFBARON3BOCX88/pg%2B6.jpg', title: 'Page 6', objPos: 'right center' },
  { file: '1738946205870-VKUJDBVUN9XOF0KJN75G/pg%2B7.jpg', title: 'Page 7', objPos: 'right center' },
]

export default function Book() {
  return (
    <CollectionPage
      title="A Different View: The Book"
      year="2026"
      pieces={8}
      description="An early selection from A Different View, where shifts in angle, focus and light transform the everyday into abstraction. Collector Edition, limited run, signed and numbered."
      artworks={artworks}
      heroBgPos="left center"
      heroBgFile="6024c81a-6df1-48f7-8fbd-e72f800b19b6/Front+copy+A+Different+View.jpg"
    />
  )
}
