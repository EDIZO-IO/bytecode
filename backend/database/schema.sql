-- Create database
CREATE DATABASE IF NOT EXISTS bytecode_portfolio;
USE bytecode_portfolio;

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    slug VARCHAR(100) NOT NULL UNIQUE,
    icon VARCHAR(50),
    color VARCHAR(7) DEFAULT '#6366f1',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Technologies table
CREATE TABLE IF NOT EXISTS technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50),
    icon VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    features TEXT,
    media_url VARCHAR(500),
    media_type ENUM('image', 'video') DEFAULT 'image',
    aspect_ratio VARCHAR(20) DEFAULT 'aspect-video',
    category_id INT NOT NULL,
    status ENUM('active', 'inactive', 'archived') DEFAULT 'active',
    featured BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    external_url VARCHAR(500),
    github_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_category (category_id),
    INDEX idx_status (status),
    INDEX idx_featured (featured)
);

-- Project technologies junction table
CREATE TABLE IF NOT EXISTS project_technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    technology_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (technology_id) REFERENCES technologies(id) ON DELETE CASCADE,
    UNIQUE KEY unique_project_tech (project_id, technology_id)
);

-- Insert sample categories
INSERT INTO categories (name, description, slug, icon, color) VALUES
('Web Applications', 'Modern web applications and SaaS platforms', 'web-applications', 'Globe', '#8b5cf6'),
('Mobile Apps', 'iOS and Android mobile applications', 'mobile-apps', 'Smartphone', '#06b6d4'),
('Websites', 'Corporate websites and landing pages', 'websites', 'Monitor', '#10b981'),
('Graphics Design', 'Logo design, branding, and visual identity', 'graphics-design', 'Palette', '#f59e0b'),
('Video Editing', 'Video production and motion graphics', 'video-editing', 'Video', '#ef4444'),
('AI/ML Projects', 'Artificial Intelligence and Machine Learning projects', 'ai-ml', 'Brain', '#8b5cf6'),
('IoT Projects', 'Internet of Things and embedded systems', 'iot', 'Cpu', '#06b6d4'),
('Cybersecurity', 'Security tools and penetration testing', 'cybersecurity', 'Shield', '#ef4444');

-- Insert sample technologies
INSERT INTO technologies (name, category, icon) VALUES
('React', 'Frontend', 'React'),
('Next.js', 'Frontend', 'Next.js'),
('Vue.js', 'Frontend', 'Vue'),
('Angular', 'Frontend', 'Angular'),
('Node.js', 'Backend', 'Node.js'),
('Express', 'Backend', 'Express'),
('MongoDB', 'Database', 'MongoDB'),
('PostgreSQL', 'Database', 'PostgreSQL'),
('MySQL', 'Database', 'MySQL'),
('Redis', 'Database', 'Redis'),
('AWS', 'Cloud', 'AWS'),
('Docker', 'DevOps', 'Docker'),
('Kubernetes', 'DevOps', 'Kubernetes'),
('Python', 'Backend', 'Python'),
('Java', 'Backend', 'Java'),
('PHP', 'Backend', 'PHP'),
('React Native', 'Mobile', 'React Native'),
('Flutter', 'Mobile', 'Flutter'),
('Swift', 'Mobile', 'Swift'),
('Kotlin', 'Mobile', 'Kotlin'),
('TensorFlow', 'AI/ML', 'TensorFlow'),
('PyTorch', 'AI/ML', 'PyTorch'),
('OpenCV', 'AI/ML', 'OpenCV'),
('Arduino', 'IoT', 'Arduino'),
('Raspberry Pi', 'IoT', 'Raspberry Pi'),
('ESP32', 'IoT', 'ESP32');

-- Insert sample projects
INSERT INTO projects (title, description, features, media_url, media_type, aspect_ratio, category_id, featured, external_url, github_url) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.', 'Payment processing,User management,Inventory tracking,Analytics dashboard', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 1, TRUE, 'https://example-ecommerce.com', 'https://github.com/bytecode/ecommerce-platform'),
('SaaS Dashboard', 'Comprehensive SaaS platform with subscription management, analytics, and multi-tenant architecture.', 'Subscription billing,User analytics,Multi-tenancy,API management', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 1, TRUE, 'https://example-saas.com', 'https://github.com/bytecode/saas-dashboard'),
('Real-time Chat Application', 'Scalable chat application with real-time messaging, file sharing, and video calling capabilities.', 'Real-time messaging,File sharing,Video calls,Group chats', 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 1, FALSE, 'https://example-chat.com', 'https://github.com/bytecode/chat-app'),
('Content Management System', 'Headless CMS with custom admin interface, content scheduling, and multi-site management.', 'Content editing,Media management,Workflow approval,Multi-site support', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 1, FALSE, 'https://example-cms.com', 'https://github.com/bytecode/cms'),
('Fitness Mobile App', 'Health and fitness app with social features, workout tracking, and nutrition planning.', 'Workout tracking,Nutrition planning,Social features,Progress analytics', 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-[4/5]', 2, TRUE, 'https://example-fitness.com', 'https://github.com/bytecode/fitness-app'),
('Food Delivery App', 'On-demand food delivery app with real-time tracking and payment integration.', 'Real-time tracking,Payment integration,Restaurant management,Customer reviews', 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-[4/5]', 2, FALSE, 'https://example-food.com', 'https://github.com/bytecode/food-delivery'),
('Corporate Website', 'Modern, responsive website for tech startup with CMS integration.', 'Responsive design,CMS integration,SEO optimization,Contact forms', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 3, TRUE, 'https://example-corp.com', 'https://github.com/bytecode/corporate-website'),
('Restaurant Website', 'Elegant restaurant website with online ordering and reservation system.', 'Online ordering,Reservation system,Menu management,Reviews', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 3, FALSE, 'https://example-restaurant.com', 'https://github.com/bytecode/restaurant-website'),
('Brand Identity System', 'Complete brand package with logo design and brand guidelines.', 'Logo design,Brand guidelines,Color palette,Typography', 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-square', 4, TRUE, 'https://example-brand.com', 'https://github.com/bytecode/brand-identity'),
('Marketing Campaign Graphics', 'Social media and print marketing materials for product launch.', 'Social media graphics,Print materials,Marketing collateral,Ad designs', 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-[3/4]', 4, FALSE, 'https://example-marketing.com', 'https://github.com/bytecode/marketing-graphics'),
('Product Launch Video', 'Cinematic product showcase with motion graphics and 3D animation.', 'Motion graphics,3D animation,Product showcase,Cinematic effects', 'https://videos.pexels.com/video-files/3945313/3945313-uhd_2560_1440_30fps.mp4', 'video', 'aspect-video', 5, TRUE, 'https://example-video.com', 'https://github.com/bytecode/product-video'),
('Corporate Documentary', 'Professional company story and culture video with interviews.', 'Company interviews,Culture showcase,Professional editing,Color grading', 'https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_30fps.mp4', 'video', 'aspect-video', 5, FALSE, 'https://example-documentary.com', 'https://github.com/bytecode/corporate-doc'),
('AI Chatbot', 'Intelligent chatbot with natural language processing capabilities.', 'Natural language processing,Context awareness,Multi-language support,Learning capabilities', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 6, TRUE, 'https://example-ai-chat.com', 'https://github.com/bytecode/ai-chatbot'),
('Image Recognition System', 'Computer vision system for object detection and classification.', 'Object detection,Image classification,Real-time processing,API integration', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 6, FALSE, 'https://example-image-ai.com', 'https://github.com/bytecode/image-recognition'),
('Smart Home Controller', 'IoT-based smart home automation system with mobile app control.', 'Home automation,Mobile control,Sensor integration,Energy monitoring', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 7, TRUE, 'https://example-smart-home.com', 'https://github.com/bytecode/smart-home'),
('Environmental Monitor', 'IoT device for monitoring air quality and environmental conditions.', 'Air quality monitoring,Environmental sensors,Data logging,Alert system', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 7, FALSE, 'https://example-env-monitor.com', 'https://github.com/bytecode/env-monitor'),
('Security Audit Tool', 'Automated security testing and vulnerability assessment platform.', 'Vulnerability scanning,Security testing,Report generation,Compliance checking', 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 8, TRUE, 'https://example-security-audit.com', 'https://github.com/bytecode/security-audit'),
('Penetration Testing Framework', 'Comprehensive framework for ethical hacking and security testing.', 'Ethical hacking,Security testing,Automated scanning,Report generation', 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200', 'image', 'aspect-video', 8, FALSE, 'https://example-pentest.com', 'https://github.com/bytecode/pentest-framework');

-- Insert project technologies relationships
INSERT INTO project_technologies (project_id, technology_id) VALUES
-- E-Commerce Platform
(1, 1), (1, 5), (1, 7), (1, 11),
-- SaaS Dashboard
(2, 2), (2, 5), (2, 8), (2, 11),
-- Real-time Chat Application
(3, 1), (3, 5), (3, 9), (3, 12),
-- Content Management System
(4, 2), (4, 5), (4, 8), (4, 11),
-- Fitness Mobile App
(5, 17), (5, 7), (5, 11),
-- Food Delivery App
(6, 18), (6, 5), (6, 7), (6, 11),
-- Corporate Website
(7, 1), (7, 5), (7, 8),
-- Restaurant Website
(8, 2), (8, 5), (8, 8),
-- Brand Identity System
(9, 25), (9, 26), (9, 27),
-- Marketing Campaign Graphics
(10, 25), (10, 26), (10, 27),
-- Product Launch Video
(11, 28), (11, 29), (11, 30),
-- Corporate Documentary
(12, 28), (12, 29), (12, 30),
-- AI Chatbot
(13, 14), (13, 21), (13, 22),
-- Image Recognition System
(14, 14), (14, 21), (14, 23),
-- Smart Home Controller
(15, 14), (15, 24), (15, 25),
-- Environmental Monitor
(16, 14), (16, 24), (16, 25),
-- Security Audit Tool
(17, 14), (17, 5), (17, 7),
-- Penetration Testing Framework
(18, 14), (18, 5), (18, 7);
