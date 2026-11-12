class TimeMap {
    keyStore: Map<string, [[number, string]]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push([timestamp, value])
        } else {
            this.keyStore.set(key, [[timestamp, value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const arr = this.keyStore.get(key);

        if (!arr) return "";

        let l = 0, r = arr.length - 1;

        while (l < r) {
            const middle = l + Math.ceil((r - l) / 2);
            const val = arr[middle][0];

            if (val > timestamp) {
                r = middle - 1;
            } else {
                l = middle;
            }
        }

        if (arr[l][0] > timestamp) return ""

        return arr[l][1]
    }
}
