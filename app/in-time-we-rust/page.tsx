import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1740583598017-ZXUH5UPFOJ0NY2N5DB6U/_H6R0262+CB+copy.jpg', title: 'H6R0262' },
  { file: '1740583577372-8C1SKQBX0D3IWKK0UY4P/_H6R0177.jpg', title: 'H6R0177' },
  { file: '1740583587167-FJDGTUW2U3IXKRFYJB0D/_H6R0185.jpg', title: 'H6R0185' },
  { file: '1740583615314-CUOFSJMFDRYV2YCYNPQV/_H6R0278.jpg', title: 'H6R0278' },
  { file: '1740583590908-GCCUWMAXUOP3OAXLIRWY/_H6R0253CB.jpg', title: 'H6R0253' },
  { file: '1740583601919-BGJAXV1DKOIIPA4L00OO/_H6R0269CB.jpg', title: 'H6R0269' },
  { file: '1740584237869-IR4IK4CEN5M5NA6D88CK/_H6R0270CB+2+copy.jpg', title: 'H6R0270' },
  { file: 'f73b100b-3660-4e0a-9f30-dc308538e3bc/_H6R0083.jpg', title: 'H6R0083' },
]

export default function InTimeWeRust() {
  return (
    <CollectionPage
      title="In Time We Rust"
      year="2025"
      pieces={8}
      description="Decay as beauty — industrial relics and forgotten steel photographed at the edge of collapse."
      artworks={artworks}
      heroBgFile="1740583598017-ZXUH5UPFOJ0NY2N5DB6U/_H6R0262+CB+copy.jpg"
    />
  )
}
