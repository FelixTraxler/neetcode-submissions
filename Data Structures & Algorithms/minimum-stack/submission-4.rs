struct MinStack {
    stack: [i32; 30000],
    minStack: [i32; 30000],
    size: usize,
}

impl MinStack {
    pub fn new() -> Self {
        return MinStack {
            stack: [0; 30000],
            minStack: [0; 30000],
            size: 0
        };
    }

    pub fn push(&mut self, val: i32) {
        self.stack[self.size] = val;

        if self.size > 0 {
            let prevMin = self.minStack[self.size - 1];
            let newMin = if prevMin < val {prevMin} else {val};
            self.minStack[self.size] = newMin
        } else {
            self.minStack[self.size] = val
        }

        self.size += 1;
    }

    pub fn pop(&mut self) {
        self.size -= 1;
    }

    pub fn top(&self) -> i32 {
        return self.stack[self.size - 1];
    }

    pub fn get_min(&self) -> i32 {
        return self.minStack[self.size - 1];
    }
}
