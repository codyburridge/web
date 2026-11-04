import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1740593183577-NWHQ87P95UA6BS1V9DD7/_H6R0018.jpg', title: 'H6R0018' },
  { file: '1740593183699-LAXXM1SLKESHKD8I4KEU/_H6R0043.jpg', title: 'H6R0043' },
  { file: '1740593194969-E0FK768KANWO4LTEAQJC/_H6R0053.jpg', title: 'H6R0053' },
  { file: '1740593195738-KYGS3K16MK25FDX82DL0/_H6R0058.jpg', title: 'H6R0058' },
  { file: '1740593207743-B1KBNSOQULIT1NVO2HZE/_H6R0069.jpg', title: 'H6R0069' },
  { file: '1740593205335-GI9WN7JMX0FLQFL51GST/_H6R0081.jpg', title: 'H6R0081' },
]

export default function NeonNumbers() {
  return (
    <CollectionPage
      title="Neon Numbers"
      year="2025"
      pieces={6}
      description="Electric signage and the language of light — numerals illuminated against the dark city."
      artworks={artworks}
      heroBgFile="1740593183577-NWHQ87P95UA6BS1V9DD7/_H6R0018.jpg"
    />
  )
}
