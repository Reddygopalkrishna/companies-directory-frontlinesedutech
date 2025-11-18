export default function Error({ message }) {
  return (
    <div className="py-10 text-center text-red-600 font-medium">
      Error: {message}
    </div>
  );
}
