import BackTo from '@/app/shared/components/BackTo'
import { CommonService } from '@/app/shared/services/common.service'

interface Attraction {
  id: number
  name: string
  detail: string
  coverimage: string
  latitude: number
  longitude: number
}

interface PageParams {
  params: { id: string }
}

// Generate static paths at build time
export async function generateStaticParams() {
  try {
    const attractions = await CommonService.getall()
    if (!attractions?.length) {
      return []
    }

    return attractions.map((attraction: Attraction) => ({
      id: String(attraction.id)
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageParams) {
  const data = await CommonService.getone(Number(params.id))
  const attraction = data.attraction

  return {
    title: attraction?.name || 'Attraction Details',
    description: attraction?.detail,
    image: attraction?.coverimage
  }
}

// Page component
export default async function AttractionPage({ params }: PageParams) {
  const data = await CommonService.getone(Number(params.id))
  const attraction = data.attraction

  if (!attraction) {
    return <div className="text-center p-4">Attraction not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <BackTo to='/' />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={attraction.coverimage}
          alt={attraction.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{attraction.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{attraction.detail}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Latitude: {attraction.latitude}</span>
            <span>Longitude: {attraction.longitude}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Revalidate the page every 10 seconds
export const revalidate = 10