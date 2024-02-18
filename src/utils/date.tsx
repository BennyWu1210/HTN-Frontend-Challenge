export function convertTime(unixTime: number): string {
  const date = new Date(unixTime);
  return date.toLocaleString();
}

export function getTimeOfDay(time: string): string {
  const date = new Date(time.replace(/-/g, "/"));
  
  const dateString = date.toLocaleTimeString().split(":");

  if (dateString.length < 3) return "invalid date (unsupported browser)";

  return dateString[0] + ":" + dateString[1] + " " + dateString[2].substring(3);
}