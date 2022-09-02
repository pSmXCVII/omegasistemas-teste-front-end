export const elapsedTime = (dateAsString) => {
  const now = new Date(Date.now());
  const dateAsDate = new Date(dateAsString);
  const diffTime = Math.abs(now - dateAsDate);
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffMinutes <= 1) return `1 minuto atrás`;
  if (diffMinutes < 60) return `${diffMinutes} minutos atrás`;
  if (diffHours === 1) return `${diffHours} hora atrás`;
  if (diffHours < 24) return `${diffHours} horas atrás`;
  if (diffDays === 1) return `${diffDays} dia atrás`;
  if (diffDays > 1) return `${diffDays} dias atrás`;
};