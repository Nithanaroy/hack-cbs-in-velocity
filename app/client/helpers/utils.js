export const setTimeoutPromise = (cb, duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve();
                cb();
            } catch (error) {
                reject(error);
            }
        }, duration)
    })
}