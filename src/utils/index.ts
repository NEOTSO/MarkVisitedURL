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