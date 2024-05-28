export async function use(fn: Promise<any>, cb: (data: any) => void) {
    fn.then(cb)
}