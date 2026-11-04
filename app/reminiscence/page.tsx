import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1740145738967-4H06G5BY0AUV9112NVPN/Death+of+a+Clown+Fin+16+bit+Crop+Grade+CB.jpg', title: 'Death of a Clown' },
  { file: '1740145738114-XCO6JZG7DAGNW6TPVA16/Vivian+Maier+Fin+16+bit+Crop.jpg', title: 'Vivian Maier' },
]

export default function Reminiscence() {
  return (
    <CollectionPage
      title="Reminiscence"
      year="2025"
      pieces={2}
      description="A meditation on memory, identity and the passage of time — portraits that linger long after the moment has passed."
      artworks={artworks}
      heroBgFile="1740145738967-4H06G5BY0AUV9112NVPN/Death+of+a+Clown+Fin+16+bit+Crop+Grade+CB.jpg"
    />
  )
}
