import { useState, useEffect } from 'react';
import { apiService, Project, Category } from '../services/api';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getAllProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await apiService.getCategories();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    }
  };

  const fetchProjectsByCategory = async (categoryId: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getProjectsByCategory(categoryId);
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  const searchProjects = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.searchProjects(query);
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await Promise.all([
        fetchProjects(),
        fetchCategories()
      ]);
    };

    initializeData();
  }, []);

  return {
    projects,
    categories,
    loading,
    error,
    fetchProjects,
    fetchProjectsByCategory,
    searchProjects,
    refetch: fetchProjects
  };
};
