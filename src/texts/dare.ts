import got from 'got'
export let darejson: string[] = []
export default async function dare (): Promise<string> {
  if (!darejson.length) {
    darejson = await got(
      'https://raw.githubusercontent.com/xIKRATOSx/Ikratos-MD-v1/main/lib/dare.json'
    ).json()
  }
  return darejson[Math.round(darejson.length * Math.random())]
}
