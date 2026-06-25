const YOUTUBE_ID_PATTERNS = [
  /(?:youtu\.be\/)([\w-]{11})/,
  /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
  /(?:youtube\.com\/embed\/)([\w-]{11})/,
  /(?:youtube\.com\/shorts\/)([\w-]{11})/,
]

const DIRECT_VIDEO_EXTENSION = /\.(mp4|webm|ogg|mov|m4v)(\?|#|$)/i

const DIRECT_VIDEO_HOSTS = ['imagekit.io', 'ik.imagekit.io']

export function getSectionVideoUrl(section) {
  return section?.videoURL || section?.video || null
}

export function getProgramVideoUrl(program) {
  return program?.videoURL || program?.video || null
}

export function resolveVideoSource(url) {
  if (!url) return null

  for (const pattern of YOUTUBE_ID_PATTERNS) {
    const match = url.match(pattern)
    if (match) {
      return {
        type: 'youtube',
        src: `https://www.youtube.com/embed/${match[1]}`,
      }
    }
  }

  if (DIRECT_VIDEO_EXTENSION.test(url) || isDirectVideoHost(url)) {
    return { type: 'direct', src: url }
  }

  return null
}

function isDirectVideoHost(url) {
  try {
    const { hostname } = new URL(url)
    return DIRECT_VIDEO_HOSTS.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
    )
  } catch {
    return false
  }
}