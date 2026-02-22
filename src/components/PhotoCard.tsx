import './PhotoCard.css'

export interface PhotoData {
  id: string
  title: string
  imageUrl: string
  location: string
  subject: string
}

interface PhotoCardProps {
  photo: PhotoData
  onImageClick: (photo: PhotoData) => void
}

export function PhotoCard({ photo, onImageClick }: PhotoCardProps) {
  return (
    <div className="photo-card">
      <div className="photo-card-image" onClick={() => onImageClick(photo)}>
        <img src={photo.imageUrl} alt={photo.title} />
      </div>
      <div className="photo-card-content">
        <h3 className="photo-card-title">{photo.title}</h3>
        <div className="photo-card-meta">
          <div className="photo-meta-item">
            <span className="photo-meta-label">Location:</span>
            <span className="photo-meta-value">📍 {photo.location}</span>
          </div>
          <div className="photo-meta-item">
            <span className="photo-meta-label">Subject:</span>
            <span className="photo-meta-value">{photo.subject}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
