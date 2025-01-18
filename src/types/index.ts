export type UserRole = 'admin' | 'user';
export type KYCStatus = 'pending' | 'approved' | 'rejected';

export interface Profile {
  id: string;
  role: UserRole;
  full_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface KYCSubmission {
  id: string;
  user_id: string;
  full_name: string;
  date_of_birth: string;
  address: string;
  id_document_url: string;
  status: KYCStatus;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface DashboardStats {
  totalUsers: number;
  kycStats: {
    pending: number;
    approved: number;
    rejected: number;
  };
}