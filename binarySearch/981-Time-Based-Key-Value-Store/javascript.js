// https://leetcode.com/problems/time-based-key-value-store/
class TimeMap {
    constructor() {
        this.map = new Map();
        this.searchTimestamp = (arr, timestamp) => {
            let l = 0,
                r = arr.length - 1;
            while (l <= r) {
                const mid = Math.floor((l + r) / 2);
                if (arr[mid].timestamp === timestamp) return mid;
                l = arr[mid].timestamp < timestamp ? mid + 1 : l;
                r = arr[mid].timestamp > timestamp ? mid - 1 : r;
            }
            return -l - 1;
        };
    }

    set(key, value, timestamp) {
        const arr = this.map.get(key) || [];
        arr.push({ value, timestamp });
        this.map.set(key, arr);
    }

    get(key, timestamp) {
        const arr = this.map.get(key);
        if (!arr) return '';
        const index = this.searchTimestamp(arr, timestamp);
        if (index === -1) return '';
        if (index >= 0) return arr[index].value;
        // Use previous value from the collection
        return arr[-index - 2].value;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
