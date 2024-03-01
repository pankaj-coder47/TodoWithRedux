import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { themeDifine } from "../features/theme/themeSlice";

export default function Theme() {
    const dispatch = useDispatch();
    const themeMode = useSelector(state => state.theme.themeMode)
    useEffect(() => {
        document.querySelector('html').classList.remove('dark', 'light')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
        <div className="flex justify-center items-center py-4">
            <div className="bt">
                <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                    onClick={() => {
                        if (themeMode === 'light') { dispatch(themeDifine('dark')) } else dispatch(themeDifine('light'))
                    }}
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {themeMode === 'dark' ? 'light-mode' : 'dark-mode'} &#8594;
                    </span>
                </button>

            </div>
        </div>
    )
}
