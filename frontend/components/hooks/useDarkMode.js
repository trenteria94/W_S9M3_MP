import { useLocalStorage } from "./useLocalStorage"

export function useDarkMode() {
    const [darkmode, setDarkMode] = useLocalStorage('darkmode', false)
    return [darkmode, setDarkMode]
}