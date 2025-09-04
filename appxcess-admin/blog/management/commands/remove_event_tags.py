from django.core.management.base import BaseCommand
from blog.models import Event


class Command(BaseCommand):
    help = 'Remove all tags from all events'

    def handle(self, *args, **options):
        # Get all events
        events = Event.objects.all()
        
        if not events.exists():
            self.stdout.write(
                self.style.WARNING('No events found in the database.')
            )
            return
        
        # Remove tags from all events
        updated_count = 0
        for event in events:
            if event.tags:  # Only update if there are tags
                self.stdout.write(f'Removing tags from: {event.title}')
                self.stdout.write(f'  Previous tags: {event.tags}')
                event.tags = []  # Set tags to empty list
                event.save()
                updated_count += 1
                self.stdout.write(f'  Tags removed successfully')
            else:
                self.stdout.write(f'No tags to remove from: {event.title}')
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully removed tags from {updated_count} events!')
        )
        
        # Show final status
        self.stdout.write('\nFinal event status:')
        for event in events:
            self.stdout.write(f'- {event.title}: {event.tags}')
