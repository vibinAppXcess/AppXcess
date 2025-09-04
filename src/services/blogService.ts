const API_BASE_URL = 'http://localhost:8000/api';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  image: string;
  tags: string[];
  gallery: string[];
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export const blogService = {
  // FAQs
  async getFaqs(): Promise<{ id: number; question: string; answer: string; category: string; sort_order: number; is_active: boolean; created_at: string; updated_at: string; }[]> {
    const response = await fetch(`${API_BASE_URL}/faqs/`);
    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }
    const data = await response.json();
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.results)) return data.results;
    return [];
  },
  // Get all blog posts
  async getAllPosts(): Promise<BlogPost[]> {
    // Use non-paginated custom endpoint; fallback unwrap if server returns paginated
    const response = await fetch(`${API_BASE_URL}/posts/all/`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await response.json();
    // If pagination sneaks in, unwrap results
    if (data && Array.isArray(data)) return data as BlogPost[];
    if (data && Array.isArray(data.results)) return data.results as BlogPost[];
    return [];
  },

  // Get recent featured posts
  async getRecentPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_URL}/posts/recent/`);
    if (!response.ok) {
      throw new Error('Failed to fetch recent posts');
    }
    return response.json();
  },

  // Get a specific blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/posts/detail/${slug}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    return response.json();
  },

  // Get a specific blog post by ID
  async getPostById(id: number): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    return response.json();
  },

  // Create a new blog post
  async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to create blog post');
    }
    return response.json();
  },

  // Update a blog post
  async updatePost(id: number, post: Partial<BlogPost>): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to update blog post');
    }
    return response.json();
  },

  // Delete a blog post
  async deletePost(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}/`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete blog post');
    }
  },
};
