import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#181816] text-[#E5E3DC] pt-16 pb-12 border-t border-[#2B2A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2C2B27]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E65100] flex items-center justify-center text-white text-base">
                ✨
              </div>
              <span className="font-bold text-xl text-white tracking-tight">EventSphere</span>
            </Link>
            <p className="text-sm text-[#A8A59C] max-w-sm leading-relaxed">
              A curated platform for India's tech summits, acoustic showcases, founder salons, and cultural retreats. Crafted for authentic real-world connections.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8C8980]">
              <span className="text-emerald-400">🛡️</span>
              <span>Admin-verified events for quality & community safety</span>
            </div>
          </div>

          {/* Hubs */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Hubs</p>
            <ul className="space-y-2 text-sm text-[#A8A59C]">
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Bengaluru (Silicon Plateau)
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Mumbai (Arts & Live Indie)
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Delhi NCR (Founders & Conclaves)
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Pune (Heritage & Engineering)
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Hyderabad (Fintech & Sports)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Platform</p>
            <ul className="space-y-2 text-sm text-[#A8A59C]">
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Browse All Events
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="hover:text-white transition-colors">
                  Host an Event
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-white transition-colors">
                  Personal Schedule Planner
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-white transition-colors">
                  Saved Collections
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white transition-colors">
                  User Profile Dossier
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">
                  Organizer Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A776F] gap-4">
          <p>© 2026 EventSphere. Crafted with intention for communities.</p>
        </div>
      </div>
    </footer>
  );
}
