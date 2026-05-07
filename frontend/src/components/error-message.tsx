
export default function ErrorMessage({message} : { message: string}) {
  return (
    <div className="bg-red-400/20 text-red-600 px-3 py-2 rounded-md text-sm">
        <p>{message}</p>
    </div>
  )
}
