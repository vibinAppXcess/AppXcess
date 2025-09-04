from django.db import models
from django.utils.text import slugify
from django.utils.html import strip_tags
from django.urls import reverse

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    description = models.TextField()
    content = models.TextField()
    author = models.CharField(max_length=100)
    date = models.DateField()
    read_time = models.CharField(max_length=20, default="5 min read")
    image = models.URLField(max_length=500)
    tags = models.JSONField(default=list)
    gallery = models.JSONField(default=list, blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        # Ensure content is stored as plain text (no HTML tags)
        if self.content:
            self.content = strip_tags(self.content)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date', '-created_at']


class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    category = models.CharField(max_length=100, blank=True, default="")
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question

    class Meta:
        ordering = ['sort_order', '-created_at']


class Event(models.Model):
    EVENT_TYPE_CHOICES = [
        ('webinar', 'Webinar'),
        ('conference', 'Conference'),
        ('workshop', 'Workshop'),
        ('meetup', 'Meetup'),
    ]
    
    EVENT_CATEGORY_CHOICES = [
        ('tech', 'Technology'),
        ('business', 'Business'),
        ('innovation', 'Innovation'),
        ('networking', 'Networking'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    type = models.CharField(max_length=20, choices=EVENT_TYPE_CHOICES, default='conference')
    category = models.CharField(max_length=20, choices=EVENT_CATEGORY_CHOICES, default='tech')
    attendees = models.PositiveIntegerField(default=0)
    featured = models.BooleanField(default=False)
    image = models.URLField(max_length=500)
    tags = models.JSONField(default=list)
    registration_link = models.URLField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date', '-created_at']
