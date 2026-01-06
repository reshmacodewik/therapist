export const formatMonthYear = (dateString?: string): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

export const formatTime = (time?: string): string => {
  if (!time) return '';

  const [hours, minutes] = time.split(':').map(Number);
  if (hours === undefined || minutes === undefined) return '';

  const date = new Date();
  date.setHours(hours, minutes);

  return date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    .toLowerCase();
};
