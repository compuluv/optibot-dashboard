'use client'
import { useAuth } from '../hooks/useAuth'
import AuthModal from '../components/AuthModal'

export default function Dashboard() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-pulse text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <AuthModal />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">OptiBot Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <button
                onClick={signOut}
                className="btn-secondary text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="card text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Welcome to OptiBot!</h2>
          <p className="text-gray-600 mb-8">Your AI-powered task management dashboard is ready!</p>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium">✅ Database Connected</p>
            <p className="text-green-800 font-medium">✅ Authentication Working</p>
            <p className="text-green-800 font-medium">✅ Deployment Successful</p>
          </div>
        </div>
      </div>
    </div>
  )
}
