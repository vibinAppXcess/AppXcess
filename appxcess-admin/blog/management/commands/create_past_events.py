from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from blog.models import Event


class Command(BaseCommand):
    help = 'Create past events for testing'

    def handle(self, *args, **options):
        # Create past events (events that have already happened)
        past_events_data = [
            {
                'title': 'Tech Innovation Summit 2023',
                'description': 'A comprehensive exploration of emerging technologies and their impact on business transformation. Featured keynote speakers from leading tech companies.',
                'date': timezone.now().date() - timedelta(days=30),  # 30 days ago
                'time': '09:00 AM - 05:00 PM',
                'location': 'San Francisco, CA',
                'type': 'conference',
                'category': 'tech',
                'attendees': 450,
                'featured': True,
                'image': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&crop=center',
                'tags': [],
                'registration_link': 'https://example.com/register/tech-summit-2023'
            },
            {
                'title': 'Digital Marketing Workshop',
                'description': 'Learn the latest digital marketing strategies and tools to boost your online presence and drive business growth.',
                'date': timezone.now().date() - timedelta(days=15),  # 15 days ago
                'time': '10:00 AM - 04:00 PM',
                'location': 'New York, NY',
                'type': 'workshop',
                'category': 'business',
                'attendees': 85,
                'featured': False,
                'image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center',
                'tags': [],
                'registration_link': 'https://example.com/register/digital-marketing'
            },
            {
                'title': 'Startup Pitch Night',
                'description': 'Watch innovative startups pitch their ideas to investors and industry experts. Networking opportunities for entrepreneurs.',
                'date': timezone.now().date() - timedelta(days=7),  # 7 days ago
                'time': '06:00 PM - 09:00 PM',
                'location': 'Austin, TX',
                'type': 'meetup',
                'category': 'networking',
                'attendees': 150,
                'featured': False,
                'image': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop&crop=center',
                'tags': [],
                'registration_link': 'https://example.com/register/startup-pitch'
            },
            {
                'title': 'AI & Machine Learning Webinar',
                'description': 'Deep dive into artificial intelligence and machine learning applications in modern business environments.',
                'date': timezone.now().date() - timedelta(days=3),  # 3 days ago
                'time': '02:00 PM - 04:00 PM',
                'location': 'Virtual Event',
                'type': 'webinar',
                'category': 'tech',
                'attendees': 280,
                'featured': False,
                'image': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&crop=center',
                'tags': [],
                'registration_link': 'https://example.com/register/ai-webinar'
            }
        ]

        created_count = 0
        for event_data in past_events_data:
            # Check if event already exists
            if not Event.objects.filter(title=event_data['title']).exists():
                event = Event.objects.create(**event_data)
                self.stdout.write(
                    self.style.SUCCESS(f'Successfully created past event: {event.title}')
                )
                self.stdout.write(f'  Event Date: {event.date}')
                self.stdout.write(f'  Event Location: {event.location}')
                self.stdout.write(f'  Event Type: {event.type}')
                self.stdout.write(f'  Expected Attendees: {event.attendees}')
                created_count += 1
            else:
                self.stdout.write(
                    self.style.WARNING(f'Past event "{event_data["title"]}" already exists!')
                )

        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {created_count} past events!')
        )
