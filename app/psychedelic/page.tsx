import CollectionPage from '../components/CollectionPage'

// Working titles except Psychedelic Trellick #Orange: Cody to confirm the real names.
const artworks = [
  { file: '1738944701596-BAMIII6ZA7ENW9RBQCIO/Screenshot%2B2025-01-15%2Bat%2B19.12.30.png', title: 'Psychedelic Trellick #Orange' },
  { file: '1738944758705-1Y5CI8Y1ZOVS92F44OCO/Screenshot%2B2025-01-15%2Bat%2B19.13.02.png', title: 'Psychedelic Battersea' },
  { file: '1738944576686-APL6O984VS6RP11S66BU/Screenshot%2B2025-01-17%2Bat%2B15.02.20.png', title: 'Psychedelic Water Tower' },
  { file: '1739380195794-M2HXGCCFWE2OO1VM755Q/Screenshot%2B2024-04-24%2Bat%2B10.56.54.jpg', title: 'Psychedelic Garage' },
]

export default function Psychedelic() {
  return (
    <CollectionPage
      title="Psychedelic"
      year="Ongoing"
      pieces={4}
      description="Influenced by screen print and pop aesthetics, each piece becomes more immediate, more stylised. Marked with the Psychedelic tag."
      artworks={artworks}
    />
  )
}
