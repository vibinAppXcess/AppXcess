from django.core.management.base import BaseCommand
from django.utils import timezone
from blog.models import BlogPost
from datetime import date

class Command(BaseCommand):
    help = 'Create dummy blog posts for testing'

    def handle(self, *args, **options):
        dummy_blogs = [
            {
                'title': 'Grid system for better Design User Interface',
                'description': 'A comprehensive guide to understanding and implementing grid systems in modern web design',
                'content': '''
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Grid systems are fundamental to creating well-structured, responsive, and visually appealing user interfaces. 
                    They provide a systematic approach to organizing content, ensuring consistency and improving user experience.
                </p>
                
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Grid System Overview" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Common Grid Structures In Websites and Interfaces</h2>
                
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    There are three primary types of grid structures that designers use to organize content effectively. Each type serves a specific purpose and can be combined to create complex, flexible layouts.
                </p>
                
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Grid Types" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Column Grid</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Column grids use vertical columns to create structure and alignment. This is the most common type of grid system, often using 12 columns that can be combined in various ways to create different layouts.
                </p>
                
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop" alt="Column Grid Example" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Modular Grid</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Modular grids use square and rectangular modules for flexible layouts. This approach allows for more creative arrangements while maintaining visual consistency.
                </p>
                
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop" alt="Modular Grid Example" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Hierarchical Grid</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Hierarchical grids create content hierarchy with varying sizes and prominence. This type of grid helps guide users through content by establishing clear visual relationships.
                </p>
                
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop" alt="Hierarchical Grid Example" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Implementing Grid Systems</h2>
                
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    When implementing grid systems, consider these key principles to ensure effective design and user experience.
                </p>
                
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Implementation Principles" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Consistency in Spacing and Alignment</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Maintain uniform spacing and alignment throughout your design. This creates a professional appearance and improves readability.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Responsive Breakpoints</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Design for different screen sizes and devices. Use responsive breakpoints to ensure your grid system works well on all platforms.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Content Hierarchy</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Establish clear visual hierarchy to guide users through your content. Use size, color, and positioning to indicate importance.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Accessibility and Readability</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Ensure your grid system is accessible to all users. Consider factors like contrast, font size, and navigation ease.
                </p>
                
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Best Practices" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Grid System Best Practices</h2>
                
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Following these best practices will help you create effective and user-friendly grid systems.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Do: Consistent Spacing and Alignment</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Maintain uniform gaps and alignments throughout your design. This creates a professional appearance and improves the overall user experience.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Don't: Inconsistent Spacing and Alignment</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Avoid random spacing that creates visual chaos and poor user experience. Inconsistent grids can confuse users and make content difficult to scan.
                </p>
                ''',
                'author': 'Olivia Rhye',
                'date': date(2024, 1, 15),
                'read_time': '8 min read',
                'image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
                'tags': ['Design', 'UI/UX', 'Grid Systems', 'Web Design'],
                'featured': True,
            },
            {
                'title': 'UX review presentations',
                'description': 'How do you create compelling presentations that wow your colleagues and impress your managers?',
                'content': '''
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Creating compelling UX review presentations is an art that combines storytelling, data visualization, and strategic communication. 
                    The goal is to not only present your findings but to inspire action and drive meaningful change in your organization.
                </p>
                
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop" alt="UX Presentation" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Understanding Your Audience</h2>
                
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Before crafting your presentation, it's crucial to understand who you're presenting to. Different stakeholders have different priorities and levels of technical understanding.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Executive Stakeholders</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Focus on business impact, ROI, and strategic alignment. Use high-level metrics and clear business outcomes.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Design Teams</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Dive deep into design decisions, user research insights, and technical implementation details.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Development Teams</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Emphasize technical feasibility, implementation challenges, and resource requirements.
                </p>
                ''',
                'author': 'Phoenix Baker',
                'date': date(2024, 1, 12),
                'read_time': '6 min read',
                'image': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
                'tags': ['Design', 'Research', 'Presentation'],
                'featured': True,
            },
            {
                'title': 'Migrating to Linear 101',
                'description': 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
                'content': '''
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Linear has revolutionized how development teams manage their workflows. This comprehensive guide will walk you through the migration process and help you maximize the benefits of this powerful project management tool.
                </p>
                
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Linear Migration" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Migrate to Linear?</h2>
                
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Linear offers several advantages over traditional project management tools, including better performance, intuitive design, and powerful automation capabilities.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Performance Benefits</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Linear is built with performance in mind, offering lightning-fast search and navigation that scales with your team's needs.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Design Excellence</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    The intuitive interface reduces cognitive load and helps teams focus on what matters most - building great software.
                </p>
                ''',
                'author': 'Lana Steiner',
                'date': date(2024, 1, 10),
                'read_time': '5 min read',
                'image': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
                'tags': ['Design', 'Research'],
                'featured': False,
            },
            {
                'title': 'Building your API Stack',
                'description': 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and management.',
                'content': '''
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Building a robust API stack is crucial for modern software development. This guide covers everything from design principles to deployment strategies.
                </p>
                
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop" alt="API Stack" class="w-full h-64 object-cover rounded-lg mb-8" />
                
                <h2 class="text-3xl font-bold text-gray-900 mb-6">API Design Principles</h2>
                
                <p class="text-lg leading-relaxed mb-8 text-gray-700">
                    Good API design is the foundation of successful software architecture. Follow these principles to create APIs that are intuitive, scalable, and maintainable.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">RESTful Design</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Follow REST principles for consistent, predictable API endpoints that developers can easily understand and use.
                </p>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Versioning Strategy</h3>
                <p class="text-lg leading-relaxed mb-6 text-gray-700">
                    Implement a clear versioning strategy to ensure backward compatibility while allowing for future improvements.
                </p>
                ''',
                'author': 'Demi Wilkinson',
                'date': date(2024, 1, 8),
                'read_time': '7 min read',
                'image': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
                'tags': ['Design', 'Research'],
                'featured': False,
            },
        ]

        for blog_data in dummy_blogs:
            blog_post, created = BlogPost.objects.get_or_create(
                title=blog_data['title'],
                defaults=blog_data
            )
            if created:
                self.stdout.write(
                    self.style.SUCCESS(f'Successfully created blog post: {blog_data["title"]}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Blog post already exists: {blog_data["title"]}')
                )

        self.stdout.write(
            self.style.SUCCESS('Dummy blog posts creation completed!')
        )
