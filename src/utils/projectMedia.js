export const getMediaSrc = (source) => (
  source.startsWith('http://') || source.startsWith('https://')
    ? source
    : `${process.env.PUBLIC_URL}/${source.replace(/^\/+/, '')}`
);

const getProjectSources = (project) => (
  Array.from(new Set([
    project.image,
    ...(Array.isArray(project.images) ? project.images : []),
    project.video,
    ...(Array.isArray(project.videos) ? project.videos : []),
  ].filter((image) => typeof image === 'string' && image.trim()).map((image) => image.trim())))
);

export const isVideoSource = (source) => /\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(source);

export const getProjectMedia = (project) => (
  getProjectSources(project).map((src) => ({
    src,
    type: isVideoSource(src) ? 'video' : 'image',
  }))
);

export const getProjectImages = (project) => (
  getProjectMedia(project)
    .filter((media) => media.type === 'image')
    .map((media) => media.src)
);
