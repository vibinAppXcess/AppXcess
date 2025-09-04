from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from blog.models import Event


class Command(BaseCommand):
    help = 'Update Digital Transformation event with new tags'

    def handle(self, *args, **options):
        # Remove existing Digital Transformation event
        existing_event = Event.objects.filter(title__icontains='Digital Transformation')
        if existing_event.exists():
            event = existing_event.first()
            self.stdout.write(f'Removing existing event: {event.title}')
            event.delete()
            self.stdout.write(
                self.style.SUCCESS('Existing Digital Transformation event removed successfully!')
            )
        else:
            self.stdout.write(
                self.style.WARNING('No existing Digital Transformation event found to remove.')
            )

        # Create new Digital Transformation event with updated tags
        event_data = {
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
            'tags': ['Digital Transformation', 'Strategy', 'Innovation'],  # Removed 'Business' tag
            'registration_link': 'https://example.com/register/digital-transformation'
        }

        # Create the new event
        new_event = Event.objects.create(**event_data)
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully created new event: {new_event.title}')
        )
        self.stdout.write(f'Event ID: {new_event.id}')
        self.stdout.write(f'Event Date: {new_event.date}')
        self.stdout.write(f'Event Location: {new_event.location}')
        self.stdout.write(f'Event Type: {new_event.type}')
        self.stdout.write(f'Event Category: {new_event.category}')
        self.stdout.write(f'Featured: {new_event.featured}')
        self.stdout.write(f'Expected Attendees: {new_event.attendees}')
        self.stdout.write(f'Tags: {", ".join(new_event.tags)}')
        
        self.stdout.write(
            self.style.SUCCESS('Digital Transformation event updated successfully!')
        )
