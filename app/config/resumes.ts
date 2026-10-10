export interface ResumeConfig {
  id: 'java-backend' | 'software-engineer'
  title: string
  targetRoles: string
  description: string
  url: string
  filename: string
  downloadLabel: string
  viewLabel: string
  isPrimary: boolean
  badge?: string
}

export const JAVA_BACKEND_RESUME_URL: string =
  process.env.NEXT_PUBLIC_JAVA_BACKEND_RESUME_URL ||
  'https://ik.imagekit.io/xuh3db9z6/Parth_Sharma_Resume.pdf'

export const SOFTWARE_ENGINEER_RESUME_URL: string =
  process.env.NEXT_PUBLIC_SOFTWARE_ENGINEER_RESUME_URL ||
  'https://ik.imagekit.io/xuh3db9z6/ParthSharma_SoftwareEngineer_Resume.pdf'

export const RESUME_CONFIGS: ResumeConfig[] = [
  {
    id: 'java-backend',
    title: 'Java Backend Developer',
    targetRoles: 'For Java Developer, Java Backend Developer, and Spring Boot Backend Engineer positions.',
    description: 'Java, Spring Boot, REST APIs, backend development, and related engineering experience.',
    url: JAVA_BACKEND_RESUME_URL,
    filename: 'Parth_Sharma_Java_Backend_Resume.pdf',
    downloadLabel: 'Download Java Backend Resume',
    viewLabel: 'View Resume',
    isPrimary: true,
    badge: 'Primary Resume',
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    targetRoles: 'For general Software Engineer and entry-level software development positions.',
    description: 'General software engineering, programming, problem-solving, software development, and relevant projects.',
    url: SOFTWARE_ENGINEER_RESUME_URL,
    filename: 'Parth_Sharma_Software_Engineer_Resume.pdf',
    downloadLabel: 'Download Software Engineer Resume',
    viewLabel: 'View Resume',
    isPrimary: false,
  },
]

export const PRIMARY_RESUME = RESUME_CONFIGS[0]

/**
 * Triggers a download for a resume PDF file with the suggested filename.
 * Attempts fetching the PDF blob to ensure the designated filename is honored cross-origin.
 * Gracefully falls back to opening the PDF in a new tab with an attachment directive if blocked.
 */
export async function downloadResumeFile(
  url: string,
  filename: string
): Promise<{ success: boolean; fallbackOpened: boolean; error?: string }> {
  if (!url || typeof window === 'undefined') {
    return { success: false, fallbackOpened: false, error: 'Resume URL is not available.' }
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch resume PDF`)
    }
    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl)
    }, 1500)
    return { success: true, fallbackOpened: false }
  } catch (error) {
    // If cross-origin fetch is blocked or fails, fall back to opening with ImageKit attachment directive
    const fallbackUrl = url.includes('?') ? `${url}&ik-attachment=true` : `${url}?ik-attachment=true`
    window.open(fallbackUrl, '_blank', 'noopener,noreferrer')
    return { success: false, fallbackOpened: true }
  }
}
