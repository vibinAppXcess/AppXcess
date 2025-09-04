# AppXcess Admin - Django Blog Management System

A Django-based admin panel for managing blog posts for the AppXcess website.

## Features

- **Django Admin Panel**: Full-featured admin interface for managing blog posts
- **REST API**: RESTful API endpoints for frontend integration
- **Blog Management**: Create, edit, delete, and organize blog posts
- **Dummy Data**: Pre-populated with sample blog posts
- **CORS Support**: Configured for frontend integration

## Setup Instructions

### 1. Install Dependencies

```bash
# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt
```

### 2. Database Setup

```bash
# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser for admin access
python manage.py createsuperuser
```

### 3. Add Dummy Data

```bash
# Create sample blog posts
python manage.py create_dummy_blogs
```

### 4. Run the Server

```bash
# Start development server
python manage.py runserver
```

## Access Points

- **Admin Panel**: http://localhost:8000/admin/
- **API Endpoints**: http://localhost:8000/api/posts/

## API Endpoints

### Blog Posts
- `GET /api/posts/` - List all blog posts
- `GET /api/posts/{id}/` - Get specific blog post
- `POST /api/posts/` - Create new blog post
- `PUT /api/posts/{id}/` - Update blog post
- `DELETE /api/posts/{id}/` - Delete blog post

### Special Endpoints
- `GET /api/posts/recent/` - Get recent featured posts
- `GET /api/posts/all/` - Get all posts
- `GET /api/posts/detail/{slug}/` - Get post by slug

## Blog Post Model Fields

- `title` - Blog post title
- `slug` - URL-friendly identifier (auto-generated)
- `description` - Short description
- `content` - Full blog content (HTML)
- `author` - Author name
- `date` - Publication date
- `read_time` - Estimated reading time
- `image` - Featured image URL
- `tags` - Array of tags
- `featured` - Featured post flag
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

## Frontend Integration

The API is configured with CORS to allow requests from your React frontend. Update the frontend to fetch blog data from:

```javascript
// Get all posts
fetch('http://localhost:8000/api/posts/')

// Get specific post
fetch('http://localhost:8000/api/posts/detail/grid-system-for-better-design-user-interface/')
```

## Environment Variables

For production, update `settings.py`:
- Set `DEBUG = False`
- Configure proper `ALLOWED_HOSTS`
- Use environment variables for `SECRET_KEY`
- Configure production database
- Update CORS settings
