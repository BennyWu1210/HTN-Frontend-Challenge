export function convertTime(unixTime: number): string {
  const date = new Date(unixTime);
  return date.toLocaleString();
}

export function getTimeOfDay(time: string): string {
  const date = new Date(time);

  return date.toLocaleTimeString();
}