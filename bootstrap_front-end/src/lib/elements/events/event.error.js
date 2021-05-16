export function ErrorEvent({ isError, ErrorMessage }) {
    return (
        <div>{isError && ErrorMessage}</div>
    )
}