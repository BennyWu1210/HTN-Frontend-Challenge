export function convertTime(unixTime: number): string {
  const date = new Date(unixTime);
  return date.toLocaleString();
}

export function getTimeOfDay(time: string): string {
  const date = new Date(time);
  const dateString = date.toLocaleTimeString().split(":");
  
  return dateString[0] + ":" + dateString[1] + " " + dateString[2].substring(3);
}