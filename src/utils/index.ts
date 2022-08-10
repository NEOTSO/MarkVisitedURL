function prefixZero(num: number, length: number): string {
    return (Array(length).join("0") + num).slice(-length)
};

export function formatDate() {
    const t = new Date();
    const y = t.getFullYear();
    const m = prefixZero(+t.getMonth() + 1, 2);
    const d = prefixZero(+t.getDate(), 2);
    return y + m + d;
};

export function uniqueArray(arr: string[]): string[] {
    const newArr: string[] = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}