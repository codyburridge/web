import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1740148196507-SABHVD2G8YYG9PYRW4VR/99projects_CodyBurridge_Exhibition2_001.jpg', title: 'Exhibition 001' },
  { file: '1740148196507-7I1YI80FRV1E5N6MXHLK/99projects_CodyBurridge_Exhibition2_003.jpg', title: 'Exhibition 003' },
  { file: '1740148203377-1C4O79OXEV43AJY78ZEY/99projects_CodyBurridge_Exhibition2_007.jpg', title: 'Exhibition 007' },
  { file: '1740148202933-5GV3A69OVFXMX2HJROQV/99projects_CodyBurridge_Exhibition2_005.jpg', title: 'Exhibition 005' },
  { file: '1740148208116-G1WADJ3EF69JKJPIOB8K/99projects_CodyBurridge_Exhibition2_009.jpg', title: 'Exhibition 009' },
  { file: '1740148209342-UNEFT6S52U2VXKWFUSZ7/99projects_CodyBurridge_Exhibition2_011.jpg', title: 'Exhibition 011' },
  { file: '1740148213417-8DLO20DQ0OPTHMHRP2KP/99projects_CodyBurridge_Exhibition2_013.jpg', title: 'Exhibition 013' },
  { file: '1740148215226-X2XOIZVB4SWBB1C8K0AD/99projects_CodyBurridge_Exhibition2_015.jpg', title: 'Exhibition 015' },
]

export default function EndOfAnEasel() {
  return (
    <CollectionPage
      title="End of an Easel"
      year="2025"
      pieces={8}
      description="Fine art photographed inside the gallery — where the work meets the wall and the room becomes part of the image."
      artworks={artworks}
      heroBgFile="1740148196507-SABHVD2G8YYG9PYRW4VR/99projects_CodyBurridge_Exhibition2_001.jpg"
    />
  )
}
