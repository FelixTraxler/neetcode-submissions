class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let fleets = 1;

        let normalized = []
        for (let i = 0; i < position.length; i++) {
            normalized.push({pos: position[i], spd: speed[i]})
        }
        normalized.sort((a, b) => a.pos - b.pos)

        function nextTime() {
            const {pos, spd} = normalized.pop()
            return (target - pos) / spd
        }

        let slowestCar = nextTime()

        while (normalized.length > 0) {
            const time = nextTime();

            if (time > slowestCar) {
                slowestCar = time;
                fleets++;
            }
        }

        return fleets
    }
}
