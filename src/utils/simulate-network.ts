import { delay } from "./delay"

export async function simulateNetwork(errorMessage: string): Promise<void> {
    const delayTime = Math.floor(Math.random() * 1500) + 500
    await delay(delayTime)
    if (Math.random() < 0.1) {
        throw new Error(errorMessage)
    }
}