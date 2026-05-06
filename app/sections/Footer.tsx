'use client'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Parth Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
