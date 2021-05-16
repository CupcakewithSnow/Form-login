export function PendingEvent ({isPending}){
    return (
        <div>{isPending&&'Load...'}</div>
    )
}