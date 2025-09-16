# Bytecode Backend API

A Node.js backend API for the Bytecode portfolio project that serves project data dynamically from a MySQL database.

## Features

- 🚀 Express.js REST API
- 🗄️ MySQL database integration
- 🔒 Security middleware (Helmet, CORS, Rate limiting)
- 📊 Dynamic project categorization
- 🔍 Search functionality
- 🛡️ Error handling and validation

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/category/:categoryId` - Get projects by category
- `GET /api/projects/:id` - Get single project
- `GET /api/projects/search/:query` - Search projects
- `GET /api/projects/categories/all` - Get all categories

### Health Check
- `GET /api/health` - Server health status

## Database Schema

The database includes the following tables:
- `categories` - Project categories (Web Apps, Mobile, Graphics, etc.)
- `projects` - Project information
- `technologies` - Technology stack
- `project_technologies` - Many-to-many relationship between projects and technologies

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone and navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=bytecode_portfolio
   DB_PORT=3306
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

4. **Set up MySQL database:**
   ```bash
   # Login to MySQL
   mysql -u root -p
   
   # Run the schema file
   source database/schema.sql
   ```

5. **Start the server:**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000`

## API Response Format

All API responses follow this format:

```json
{
  "success": true,
  "data": [...],
  "count": 10,
  "message": "Optional message"
}
```

## Error Handling

The API includes comprehensive error handling:
- Database connection errors
- Invalid route handling
- Rate limiting
- CORS protection
- Input validation

## Development

### Project Structure
```
backend/
├── config/
│   └── database.js          # Database configuration
├── models/
│   └── Project.js           # Project model and queries
├── routes/
│   └── projects.js          # Project routes
├── database/
│   └── schema.sql           # Database schema and sample data
├── server.js                # Main server file
├── package.json             # Dependencies
└── README.md               # This file
```

### Adding New Features

1. **New Models**: Add to `models/` directory
2. **New Routes**: Add to `routes/` directory
3. **Database Changes**: Update `database/schema.sql`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_HOST` | MySQL host | localhost |
| `DB_USER` | MySQL username | root |
| `DB_PASSWORD` | MySQL password | (empty) |
| `DB_NAME` | Database name | bytecode_portfolio |
| `DB_PORT` | MySQL port | 3306 |
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## Sample Data

The database comes pre-populated with:
- 8 project categories
- 26 technologies
- 18 sample projects
- Technology-project relationships

## Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: SQL injection protection
- **Error Handling**: No sensitive data in error responses

## Troubleshooting

### Database Connection Issues
- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database exists and schema is loaded

### Port Already in Use
- Change `PORT` in `.env` file
- Kill existing process: `lsof -ti:5000 | xargs kill`

### CORS Issues
- Update `FRONTEND_URL` in `.env`
- Ensure frontend is running on correct port

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
