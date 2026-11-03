export interface ResumeConfig {
  id: 'software-developer' | 'software-engineer' | 'java-backend'
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

export const SOFTWARE_DEVELOPER_RESUME_URL: string =
  process.env.NEXT_PUBLIC_SOFTWARE_DEVELOPER_RESUME_URL ||
  process.env.NEXT_PUBLIC_JAVA_BACKEND_RESUME_URL ||
  'https://ik.imagekit.io/xuh3db9z6/Parth_Sharma_Software_Developer_Resume.pdf'

export const RESUME_CONFIGS: ResumeConfig[] = [
  {
    id: 'software-developer',
    title: 'Software Developer (Java & Backend)',
    targetRoles: 'For Software Developer, Java Developer, and Spring Boot Backend Engineer positions.',
    description: 'Java 21, Spring Boot 3, REST APIs, Microservices, Spring AI, MCP, Redis caching, and Cloud deployments.',
    url: SOFTWARE_DEVELOPER_RESUME_URL,
    filename: 'Parth_Sharma_Software_Developer_Resume.pdf',
    downloadLabel: 'Download Resume (PDF)',
    viewLabel: 'View Resume',
    isPrimary: true,
    badge: 'Updated Resume',
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer (Full-Stack & Systems)',
    targetRoles: 'For Software Engineer, Full-Stack Developer, and Distributed Systems roles.',
    description: 'Full-stack system architecture, Spring AI, React 18, Supabase WebSockets, Docker, AWS, and Gemini AI.',
    url: SOFTWARE_DEVELOPER_RESUME_URL,
    filename: 'Parth_Sharma_Software_Developer_Resume.pdf',
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
