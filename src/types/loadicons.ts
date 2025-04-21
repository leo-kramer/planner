const iconFiles = import.meta.glob('../assets/media/icons/*.svg', { as: 'raw', eager: true });

export const icons: Record<string, string> = {};

for (const path in iconFiles) {
  const name = path.split('/').pop()?.replace('.svg', '') ?? '';
  icons[name] = iconFiles[path] as string;
}
