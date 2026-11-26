export const getProjectSlug = (project, index) => {
  const name = project.name || project.title || 'project';
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `${slug || 'project'}-${index + 1}`;
};
