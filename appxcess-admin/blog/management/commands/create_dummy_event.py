from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from blog.models import Event


class Command(BaseCommand):
    help = 'Create a dummy event for testing purposes'

    def handle(self, *args, **options):
        # Create a dummy event
        event_data = {
            'title': 'AI & Machine Learning Summit 2024',
            'description': 'Join industry experts for a comprehensive exploration of AI and ML technologies transforming business operations. This event will feature keynote speakers, interactive workshops, and networking opportunities.',
            'date': timezone.now().date() + timedelta(days=30),  # 30 days from now
            'time': '09:00 AM - 05:00 PM',
            'location': 'San Francisco, CA & Virtual',
            'type': 'conference',
            'category': 'tech',
            'attendees': 500,
            'featured': True,
            'image': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center',
            'tags': ['AI', 'Machine Learning', 'Data Science', 'Innovation', 'Technology'],
            'registration_link': 'https://example.com/register/ai-summit-2024'
        }

        # Check if event already exists
        if Event.objects.filter(title=event_data['title']).exists():
            self.stdout.write(
                self.style.WARNING('Event "AI & Machine Learning Summit 2024" already exists!')
            )
            return

        # Create the event
        event = Event.objects.create(**event_data)
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully created event: {event.title}')
        )
        self.stdout.write(f'Event ID: {event.id}')
        self.stdout.write(f'Event Date: {event.date}')
        self.stdout.write(f'Event Location: {event.location}')
        self.stdout.write(f'Event Type: {event.type}')
        self.stdout.write(f'Event Category: {event.category}')
        self.stdout.write(f'Featured: {event.featured}')
        self.stdout.write(f'Expected Attendees: {event.attendees}')
        
        # Create additional dummy events
        additional_events = [
            {
                'title': 'Digital Transformation Workshop',
                'description': 'Learn practical strategies for implementing digital transformation in your organization. Hands-on workshops and case studies.',
                'date': timezone.now().date() + timedelta(days=45),
                'time': '10:00 AM - 03:00 PM',
                'location': 'New York, NY',
                'type': 'workshop',
                'category': 'business',
                'attendees': 75,
                'featured': True,
                'image': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&crop=center',
                'tags': ['Digital Transformation', 'Strategy', 'Innovation', 'Business'],
                'registration_link': 'https://example.com/register/digital-transformation'
            },
            {
                'title': 'Cloud Computing & DevOps Meetup',
                'description': 'Network with DevOps professionals and learn about the latest cloud technologies and best practices.',
                'date': timezone.now().date() + timedelta(days=15),
                'time': '06:00 PM - 08:00 PM',
                'location': 'Austin, TX',
                'type': 'meetup',
                'category': 'tech',
                'attendees': 120,
                'featured': False,
                'image': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center',
                'tags': ['Cloud', 'DevOps', 'Infrastructure', 'Technology'],
                'registration_link': 'https://example.com/register/devops-meetup'
            },
            {
                'title': 'FinTech Innovation Webinar',
                'description': 'Discover cutting-edge financial technologies and their impact on the industry. Expert insights and Q&A session.',
                'date': timezone.now().date() + timedelta(days=7),
                'time': '02:00 PM - 04:00 PM',
                'location': 'Virtual Event',
                'type': 'webinar',
                'category': 'innovation',
                'attendees': 300,
                'featured': False,
                'image': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center',
                'tags': ['FinTech', 'Innovation', 'Finance', 'Technology'],
                'registration_link': 'https://example.com/register/fintech-webinar'
            }
        ]

        for event_data in additional_events:
            if not Event.objects.filter(title=event_data['title']).exists():
                event = Event.objects.create(**event_data)
                self.stdout.write(
                    self.style.SUCCESS(f'Successfully created event: {event.title}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Event "{event_data["title"]}" already exists!')
                )

        self.stdout.write(
            self.style.SUCCESS('Dummy events creation completed!')
        )
