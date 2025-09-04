from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import BlogPost, FAQ, Event
from .serializers import BlogPostSerializer, BlogPostListSerializer, FAQSerializer, EventSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def get_serializer_class(self):
        if self.action == 'list':
            return BlogPostListSerializer
        return BlogPostSerializer

    @action(detail=False, methods=['get'])
    def recent(self, request):
        """Get recent blog posts"""
        recent_posts = BlogPost.objects.filter(featured=True).order_by('-date')[:6]
        serializer = BlogPostListSerializer(recent_posts, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def all(self, request):
        """Get all blog posts"""
        all_posts = BlogPost.objects.all().order_by('-date')
        serializer = BlogPostListSerializer(all_posts, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='detail/(?P<slug>[^/]+)')
    def get_by_slug(self, request, slug=None):
        """Get a specific blog post by slug"""
        try:
            blog_post = get_object_or_404(BlogPost, slug=slug)
            serializer = BlogPostSerializer(blog_post)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': f'Blog post not found: {slug}'}, status=404)
    
    def retrieve(self, request, pk=None):
        """Get a specific blog post by ID"""
        blog_post = get_object_or_404(BlogPost, pk=pk)
        serializer = BlogPostSerializer(blog_post)
        return Response(serializer.data)


class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.filter(is_active=True).order_by('sort_order', '-created_at')
    serializer_class = FAQSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-date')
    serializer_class = EventSerializer
    pagination_class = None  # Disable pagination for events

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming events"""
        from django.utils import timezone
        today = timezone.now().date()
        upcoming_events = Event.objects.filter(date__gte=today).order_by('date')
        serializer = EventSerializer(upcoming_events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def past(self, request):
        """Get past events"""
        from django.utils import timezone
        today = timezone.now().date()
        past_events = Event.objects.filter(date__lt=today).order_by('-date')
        serializer = EventSerializer(past_events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured events"""
        featured_events = Event.objects.filter(featured=True).order_by('-date')
        serializer = EventSerializer(featured_events, many=True)
        return Response(serializer.data)
