import { useEffect, useState } from 'react'
import { PhotoCard, type PhotoData } from '../components/PhotoCard'
import { Modal } from '../components/Modal'

const photos: PhotoData[] = [
  {
    id: '1',
    title: 'Great Horned Owl',
    imageUrl: '/photos/great_horned_owl_1.jpg',
    location: 'Pennsylvania, USA',
    subject: 'Great Horned Owl',
  },
  {
    id: '2',
    title: 'Prarie Warbler',
    imageUrl: '/photos/prairie_warbler_1.jpg',
    location: 'Pine Barrens, New Jersey, USA',
    subject: 'Prairie Warbler',
  },
  {
    id: '3',
    title: 'Painted Bunting',
    imageUrl: '/photos/painted_bunting_1.jpg',
    location: 'Philadelphia, Pennsylvania, USA',
    subject: 'Painted Bunting',
  },
    {
    id: '4',
    title: 'Red Fox',
    imageUrl: '/photos/red_fox_1.jpg',
    location: 'Delaware, USA',
    subject: 'Red Fox',
  },
]

export function WildlifePhotography() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null)

  useEffect(() => {
    document.title = 'Timothy Flynn | Wildlife Photography'
  }, [])

  return (
    <div className="page-content">
      <h2>Wildlife Photography</h2>
      <p>
        A curated collection of wildlife photography from across the globe. Each image captures
        the beauty, behavior, and essence of animals in their natural habitats. Click any image
        to view it in full detail.
      </p>

      <div className="photo-gallery">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onImageClick={setSelectedPhoto}
          />
        ))}
      </div>

      {selectedPhoto && (
        <Modal
          isOpen={true}
          imageUrl={selectedPhoto.imageUrl}
          title={selectedPhoto.title}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  )
}
