import { useState } from 'react'
import { Eye, EyeOff, Lock, LogOut, Shield, User, UserCog, GraduationCap } from 'lucide-react'

type UserType = 'Admin' | 'Faculty' | 'Student'

const USER_TYPES: { key: UserType; icon: typeof Shield }[] = [
  { key: 'Admin', icon: Shield },
  { key: 'Faculty', icon: UserCog },
  { key: 'Student', icon: GraduationCap },
]

export default function LoginCard() {
  const [userType, setUserType] = useState<UserType>('Admin')
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(8,40,86,0.28)] ring-1 ring-blue-900/10 sm:p-6">
      <h3 className="text-xl font-bold text-slate-900">Login</h3>
      <p className="mt-1 text-sm text-slate-500">Select User Type</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {USER_TYPES.map(({ key, icon: Icon }) => {
          const active = userType === key
          return (
            <button
              key={key}
              onClick={() => setUserType(key)}
              className={`flex min-h-11 flex-col items-center gap-1.5 rounded-xl border py-3 text-xs font-medium transition-colors ${
                active
                  ? 'border-brand-blue bg-brand-blue text-white'
                  : 'border-slate-200 text-slate-600 hover:border-brand-blue/50'
              }`}
            >
              <Icon size={18} />
              {key}
            </button>
          )
        })}
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-brand-blue">
          <User size={16} className="text-slate-400" />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username / Email"
            className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-brand-blue">
          <Lock size={16} className="text-slate-400" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={() => setShowPassword((s) => !s)}
            className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-400 hover:text-slate-600"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <button className="mt-5 min-h-11 w-full rounded-xl bg-brand-blue py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/30 hover:bg-navy-800">
        Login
      </button>

      <button className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 text-sm font-medium text-brand-blue hover:underline">
        <LogOut size={14} />
        Logout
      </button>
    </div>
  )
}
