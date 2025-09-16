import { pool } from '../config/database.js';

export class Project {
  // Get all projects
  static async getAll() {
    try {
      const [rows] = await pool.execute(`
        SELECT 
          p.*,
          c.name as category_name,
          c.description as category_description,
          GROUP_CONCAT(t.name) as technologies
        FROM projects p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN project_technologies pt ON p.id = pt.project_id
        LEFT JOIN technologies t ON pt.technology_id = t.id
        GROUP BY p.id
        ORDER BY p.created_at DESC
      `);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }
  }

  // Get projects by category
  static async getByCategory(categoryId) {
    try {
      const [rows] = await pool.execute(`
        SELECT 
          p.*,
          c.name as category_name,
          c.description as category_description,
          GROUP_CONCAT(t.name) as technologies
        FROM projects p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN project_technologies pt ON p.id = pt.project_id
        LEFT JOIN technologies t ON pt.technology_id = t.id
        WHERE p.category_id = ?
        GROUP BY p.id
        ORDER BY p.created_at DESC
      `, [categoryId]);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching projects by category: ${error.message}`);
    }
  }

  // Get project by ID
  static async getById(id) {
    try {
      const [rows] = await pool.execute(`
        SELECT 
          p.*,
          c.name as category_name,
          c.description as category_description,
          GROUP_CONCAT(t.name) as technologies
        FROM projects p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN project_technologies pt ON p.id = pt.project_id
        LEFT JOIN technologies t ON pt.technology_id = t.id
        WHERE p.id = ?
        GROUP BY p.id
      `, [id]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error fetching project: ${error.message}`);
    }
  }

  // Get all categories
  static async getCategories() {
    try {
      const [rows] = await pool.execute(`
        SELECT c.*, COUNT(p.id) as project_count
        FROM categories c
        LEFT JOIN projects p ON c.id = p.category_id
        GROUP BY c.id
        ORDER BY c.name
      `);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }

  // Search projects
  static async search(query) {
    try {
      const searchTerm = `%${query}%`;
      const [rows] = await pool.execute(`
        SELECT 
          p.*,
          c.name as category_name,
          c.description as category_description,
          GROUP_CONCAT(t.name) as technologies
        FROM projects p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN project_technologies pt ON p.id = pt.project_id
        LEFT JOIN technologies t ON pt.technology_id = t.id
        WHERE p.title LIKE ? OR p.description LIKE ? OR p.features LIKE ?
        GROUP BY p.id
        ORDER BY p.created_at DESC
      `, [searchTerm, searchTerm, searchTerm]);
      return rows;
    } catch (error) {
      throw new Error(`Error searching projects: ${error.message}`);
    }
  }
}
