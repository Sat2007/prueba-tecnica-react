export default function Loading() {
    return (
        <div className="flex justify-center items-center py-10" role="status" aria-live="polite">
            <div className="h-10 w-10 rounded-full border-4 border-red-200 border-t-red-600 animate-spin"></div>
        </div>
    )
}