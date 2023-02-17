import got from 'got'

export let truthjson: string[] = []
export default async function truth (): Promise<string> {
  if (!truthjson.length) {
    truthjson = await got(
      'https://raw.githubusercontent.com/xIKRATOSx/Ikratos-MD-v1/main/lib/truth.json'
    ).json()
  }
  return truthjson[Math.floor(truthjson.length * Math.random())]
}
