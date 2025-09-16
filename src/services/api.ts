const API_BASE_URL = 'http://localhost:5000/api';

export interface Project {
  id: number;
  title: string;
  description: string;
  features: string;
  media_url: string;
  media_type: 'image' | 'video';
  aspect_ratio: string;
  category_id: number;
  category_name: string;
  category_description: string;
  technologies: string;
  status: 'active' | 'inactive' | 'archived';
  featured: boolean;
  sort_order: number;
  external_url?: string;
  github_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  project_count: number;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  message?: string;
}

class ApiService {
  private async request<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    const response = await this.request<Project[]>('/projects');
    return response.data;
  }

  // Get projects by category
  async getProjectsByCategory(categoryId: number): Promise<Project[]> {
    const response = await this.request<Project[]>(`/projects/category/${categoryId}`);
    return response.data;
  }

  // Get single project
  async getProject(id: number): Promise<Project> {
    const response = await this.request<Project>(`/projects/${id}`);
    return response.data;
  }

  // Search projects
  async searchProjects(query: string): Promise<Project[]> {
    const response = await this.request<Project[]>(`/projects/search/${encodeURIComponent(query)}`);
    return response.data;
  }

  // Get all categories
  async getCategories(): Promise<Category[]> {
    const response = await this.request<Category[]>('/projects/categories/all');
    return response.data;
  }

  // Health check
  async healthCheck(): Promise<any> {
    const response = await this.request<any>('/health');
    return response.data;
  }
}

export const apiService = new ApiService();
