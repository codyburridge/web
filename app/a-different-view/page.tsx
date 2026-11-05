import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1775464457183-UFBVCV0TEXOFGIZHX6TG/Off+Grid+Original.jpeg', title: 'Off Grid' },
  { file: '1775464294801-S5NO3WPGV5HYBG8UOTM4/Pool+Corner+1+Original+New.JPG', title: 'Pool Corner 1' },
  { file: '1775464481849-EZH9ZUMFNCU8CMRK54LU/Yellow+Sweep+Original.JPG', title: 'Yellow Sweep' },
  { file: '1775464301228-NN7QHHTUPGBRB4XQZD5W/Going+Home+Original.jpeg', title: 'Going Home' },
  { file: '1775578047715-T9F6HFT1BX7CQX3HLCCP/Kate%27s+Brother+Light+Original.jpeg', title: "Kate's Brother Light" },
  { file: '1775464413254-RNEEWK9DJN9V3TS742NE/Just+Leaving+Original.jpeg', title: 'Just Leaving' },
]

export default function ADifferentView() {
  return (
    <CollectionPage
      title="A Different View"
      year="2025"
      pieces={6}
      description="Studies of colour, shape and light in the everyday."
      artworks={artworks}
      heroBgFile="1775464457183-UFBVCV0TEXOFGIZHX6TG/Off+Grid+Original.jpeg"
    />
  )
}
