import { industriesPageData } from '../data/industriesPageData'

const fetchPageContent = async (slug, fallbackData) => {
    try {
        const response = await fetch(`/api/pages/${slug}`)

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()

        return {
            data,
            source: 'api',
            error: null,
        }
    } catch (error) {
        return {
            data: fallbackData,
            source: 'fallback',
            error,
        }
    }
}

export const getIndustriesPageContent = async () => (
    fetchPageContent('industries', industriesPageData)
)
