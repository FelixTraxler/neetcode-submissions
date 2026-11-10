class PrefixTree {
    constructor() {
        this.map = {}
        this.wordEnds = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if (word.length === 0) {
            this.wordEnds = true;
            return;
        }

        if (word[0] in this.map) {
            this.map[word[0]].insert(word.slice(1))
        } else {
            const tree = new PrefixTree()
            this.map[word[0]] = tree
            tree.insert(word.slice(1))
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if (word.length === 0) return this.wordEnds;

        if (word[0] in this.map) {
            return this.map[word[0]].search(word.slice(1))
        }

        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word) {
        if (word.length === 0) return true;

        if (word[0] in this.map) {
            return this.map[word[0]].startsWith(word.slice(1))
        }

        return false;

    }
}
