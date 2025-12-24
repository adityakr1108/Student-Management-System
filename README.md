# Student Management System

A full-stack student management application built with Spring Boot backend and React frontend. Features include viewing student records, adding new students through a modal form, and real-time data synchronization.

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.0-brightgreen)
![Java](https://img.shields.io/badge/Java-21-orange)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-18.1-blue)

## 📋 Features

- ✅ **Student List View** - Display all students in a responsive data table
- ✅ **Add Student** - Modal form to add new students with validation
- ✅ **Avatar Generation** - Automatic avatar creation from student initials
- ✅ **Loading States** - Custom loading spinner with 3-second delay
- ✅ **RESTful API** - Spring Boot backend with proper MVC architecture
- ✅ **Database Migration** - Flyway for version-controlled schema management
- ✅ **Responsive Design** - Mobile-friendly UI with Ant Design components
- ✅ **CORS Support** - Cross-origin requests enabled for frontend-backend communication

## 🛠️ Technologies Used

### Backend
- **Spring Boot 4.0.0** - Java framework for building REST APIs
- **Java 21** - Programming language with latest features
- **PostgreSQL 18.1** - Production-grade relational database
- **Flyway** - Database migration and version control
- **HikariCP** - High-performance JDBC connection pool
- **Maven** - Dependency management and build automation

### Frontend
- **React 19.2.3** - Modern JavaScript library for UI
- **Ant Design 6.1.1** - Professional React UI component library
- **React Hooks** - useState for state management
- **CSS3** - Custom styling with gradients and animations
- **Fetch API** - HTTP client for REST API calls

## 📁 Project Structure

```
├── src/
│   ├── main/
│   │   ├── java/com/springPractice/demo/
│   │   │   ├── DemoApplication.java           # Spring Boot main class
│   │   │   ├── datasource/
│   │   │   │   └── Datasource.java            # Database configuration
│   │   │   └── Student/
│   │   │       ├── Student.java               # Student entity
│   │   │       ├── StudentRecord.java         # Data transfer object
│   │   │       ├── StudentController.java     # REST API endpoints
│   │   │       ├── StudentService.java        # Business logic layer
│   │   │       └── StudentDataAccessService.java  # Data access layer
│   │   └── resources/
│   │       ├── application.yml                # App configuration
│   │       └── db/migration/
│   │           └── V1__CreateStudentTable.sql # Database schema
│   └── js/                                    # React frontend
│       ├── public/
│       │   └── index.html
│       └── src/
│           ├── App.js                         # Main React component
│           ├── App.css                        # App styling
│           ├── client.js                      # API client
│           ├── container.js                   # Layout wrapper
│           ├── footer.js                      # Footer with add student form
│           ├── Footer.css                     # Footer styling
│           └── index.js                       # React entry point
└── pom.xml                                    # Maven configuration
```

## 🚀 Getting Started

### Prerequisites

- **Java 21** or higher
- **PostgreSQL 18.1** installed and running
- **Node.js 16+** and npm
- **Maven 3.6+** (or use included wrapper)

### Database Setup

1. Install PostgreSQL and create the database:
```bash
psql -U postgres
CREATE DATABASE demoapplication;
\q
```

2. Update database credentials in `src/main/resources/application.yml`:
```yaml
app:
  datasource:
    jdbc-url: jdbc:postgresql://localhost:5432/demoapplication
    username: postgres
    password: your_password
```

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/adityakr1108/Spring_Boot_With_React.git
cd Spring_Boot_With_React
```

2. Build the project:
```bash
./mvnw clean install
```

3. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

Backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the React app:
```bash
cd src/js
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will start on `http://localhost:3000`

## 🔌 API Endpoints

Base URL: `http://localhost:8080/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| POST | `/students` | Add a new student |

### Example Request

```bash
curl -X GET http://localhost:8080/api/students
```

### Example Response

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "firstName": "Aditya",
    "lastname": "Kumar",
    "email": "aditya.kumar@example.com",
    "gender": "MALE"
  }
]
```

## 🗄️ Database Schema

```sql
CREATE TABLE student (
    students_id UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    gender VARCHAR(6) NOT NULL CHECK (gender IN ('MALE', 'FEMALE'))
);
```

## 🎨 Screenshots

### Student List View
- Displays all students in a table with avatars
- Shows student ID, name, email, and gender
- Responsive design with centered layout

### Add Student Modal
- Professional modal form with gradient header
- Form fields: First Name, Last Name, Email, Gender
- Input validation and error handling
- Submit, Reset, and Fill form buttons

## 🔧 Configuration

### Backend Configuration (`application.yml`)

```yaml
server:
  servlet:
    context-path: /api

app:
  datasource:
    jdbc-url: jdbc:postgresql://localhost:5432/demoapplication
    username: postgres
    password: password
    pool-size: 30
```

### Frontend Configuration (`package.json`)

```json
{
  "proxy": "http://localhost:8080"
}
```

## 🧪 Testing

Run backend tests:
```bash
./mvnw test
```

Run frontend tests:
```bash
cd src/js
npm test
```

## 📦 Building for Production

### Backend
```bash
./mvnw clean package -DskipTests
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd src/js
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aditya Kumar** - [adityakr1108](https://github.com/adityakr1108)

## 🙏 Acknowledgments

- Spring Boot Team for the excellent framework
- React Team for the powerful UI library
- Ant Design for beautiful UI components
- PostgreSQL community for the robust database