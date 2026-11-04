import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg', title: 'Fag Break' },
  { file: 'b864f8cb-9412-4f32-956b-5a5f044749cf/For+Rent+FIN+FLAT.jpg', title: 'For Rent', objPos: 'center 72%' },
  { file: '8b96c245-f2c0-40aa-8ea1-627ce11e9686/No+Parking+FIN+FLAT.jpg', title: 'No Parking' },
  { file: '50ef7b9c-cb65-4891-8612-e06598e79a59/Waiting+For+BatMan+FIN+FLAT.jpg', title: 'Waiting For Batman' },
  { file: 'e3e4cd8b-091e-43d3-9e40-b8bd7def43a5/I+am+sure+he+said+214+FIN+FLAT.jpg', title: 'I Am Sure He Said 214' },
  { file: '63ef2542-c26d-447e-9282-7600deafeaa6/No+Standing+SQUARE+FIN+FLAT.jpg', title: 'No Standing' },
  { file: 'b508a63f-7838-4df0-9b16-f66b7f5b9f36/Chained+to+the+Job+FIN+FLAT.jpg', title: 'Chained to the Job' },
  { file: '2e37d4e4-ff3c-41b8-b85f-d6c537482679/Stand+Pipe+FIN+FLAT.jpg', title: 'Stand Pipe' },
  { file: '69af5177-c3c9-4344-bbcd-3d8ddaf5d4c7/Lost+Bunny+FIN+FLAT+.jpg', title: 'Lost Bunny' },
  { file: '430bd48c-b119-4a36-8adb-39454e52cadb/Did+you+hear+something%3F+FIN+FLAT.jpg', title: 'Did You Hear Something?' },
  { file: 'd3b6cebb-0f9a-47e7-8827-dee669370560/Shadow+of+Doubt+FIN+FLAT.jpg', title: 'Shadow of Doubt' },
  { file: 'cd694742-40a8-46ad-878a-7b55ff1cce32/Delayed+FIN+FLAT.jpg', title: 'Delayed', objPos: 'left center' },
]

export default function TheConvention() {
  return (
    <CollectionPage
      title="The Convention"
      year="2024"
      pieces={12}
      description="Where costume meets convention. A fine art series capturing the human theatre behind the mask."
      artworks={artworks}
    />
  )
}
