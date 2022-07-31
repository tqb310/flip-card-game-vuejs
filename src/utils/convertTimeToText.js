export default function (ms) {
  let remainingSeconds = ms / 1000,
    result = "";
  if (remainingSeconds >= 3600) {
    let hours = Math.floor(remainingSeconds / 3600);
    result += `${hours}h`;
    remainingSeconds %= 3600;
  }
  if (remainingSeconds >= 60) {
    let minutes = Math.floor(remainingSeconds / 60);
    result += `${minutes}m`;
    remainingSeconds %= 60;
  }
  if (remainingSeconds > 0) {
    result += `${Math.floor(remainingSeconds)}s`;
  }
  return result;
}
