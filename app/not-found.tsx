import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-dark text-slate-100">
      <h1 className="text-4xl font-bold mb-4">
        404 - <span className="gradient-text">Page Not Found</span>
      </h1>
      <p className="text-slate-400 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-accent text-dark font-semibold hover:bg-sky-300 transition-colors btn-glow"
      >
        Return Home
      </Link>
    </div>
  )
}
