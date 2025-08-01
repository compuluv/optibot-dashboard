import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Task {
  id: number
  title: string
  description?: string
  status: 'pending' | 'in-progress' | 'completed' | 'failed' | 'blocked'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  created_at: string
  updated_at: string
  assigned_to?: string
  created_by?: string
  due_date?: string
  estimated_hours?: number
  tags?: string[]
}

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  notification_preferences: {
    email_notifications: boolean
    task_assignments: boolean
    task_updates: boolean
    due_date_reminders: boolean
  }
  created_at: string
}
