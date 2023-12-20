export const timeToSeconds = (time: string) => {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(":")

  const hoursToSeconds = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;

  const finalTime = hoursToSeconds + minutesToSeconds + Number(seconds)

  return finalTime
}