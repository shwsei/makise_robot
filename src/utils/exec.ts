import {exec as _exec} from 'child_process';

export function exec(cmd: string): Promise<string> {
  return new Promise(
    (resolve, reject) => _exec(
      cmd, (err, stdout, stderr) => stdout ? resolve(stdout) : reject(stderr || err)
    )
  )
}

export async function execNSFW(filename: any): Promise<boolean> {
  const pyExec = await exec(`python3 index.py temp/${filename}}`);
  const probability = parseFloat(pyExec.replace('\n', ''));

  return probability >= 0.85 ? true : false

}
